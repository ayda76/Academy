import json
import uuid
import pika
from django.conf import settings
from django.utils.timezone import now

def publish_course_purchased(profile_id, course_ids, course_names):
    credentials = pika.PlainCredentials(
        settings.RABBITMQ_USER,
        settings.RABBITMQ_PASS
    )

    connection = pika.BlockingConnection(
        pika.ConnectionParameters(
            host=settings.RABBITMQ_HOST,
            credentials=credentials,
            heartbeat=600,
            blocked_connection_timeout=300
        )
    )

    channel = connection.channel()

    # Exchange از نوع topic
    channel.exchange_declare(
        exchange="courses",
        exchange_type="topic",
        durable=True
    )

    event = {
        "event_id": str(uuid.uuid4()),
        "event_type": "course.purchased",
        "occurred_at": now().isoformat(),
        "data": {
            "profile_id": profile_id,
            "course_ids": course_ids,
            "course_names": course_names
        }
    }

    channel.basic_publish(
        exchange="courses",
        routing_key="course.purchased",
        body=json.dumps(event),
        properties=pika.BasicProperties(
            delivery_mode=2  # persistent
        )
    )

    connection.close()
