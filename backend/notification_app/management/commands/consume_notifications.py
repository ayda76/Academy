import json
import pika
from django.core.management.base import BaseCommand
from notification_app.models import Notification
from profile_app.models import Profile

class Command(BaseCommand):
    help = "Consume course.purchased events and create notifications"

    def handle(self, *args, **kwargs):
        connection = pika.BlockingConnection(
            pika.ConnectionParameters(host="rabbitmq", heartbeat=600)
        )
        channel = connection.channel()
        channel.exchange_declare(exchange="courses", exchange_type="topic", durable=True)
        channel.queue_declare(queue="notifications", durable=True)
        channel.queue_bind(exchange="courses", queue="notifications", routing_key="course.purchased")

        def callback(ch, method, properties, body):
            event = json.loads(body)
            data = event["data"]
            profile = Profile.objects.get(id=data["profile_id"])
            Notification.objects.create(
                profile_related=profile,
                title="خرید موفق دوره",
                body="دوره‌های {} با موفقیت برای شما فعال شدند.".format(", ".join(data["course_names"]))
            )
            ch.basic_ack(delivery_tag=method.delivery_tag)

        channel.basic_qos(prefetch_count=1)
        channel.basic_consume(queue="notifications", on_message_callback=callback)
        self.stdout.write("Notification consumer started")
        channel.start_consuming()
