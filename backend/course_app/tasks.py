from celery import shared_task
from django.core.mail import send_mail
from django.conf import settings

@shared_task
def send_confirmation_email_enroll(course_id,user_email):
    subject='enroll confirmation'
    text=f'your are enrolled in course ({course_id}) '
    print(f"[DEBUG] Sending email for enrolling to {course_id} by {user_email}")
    
    return send_mail(subject,text,settings.DEFAULT_FROM_EMAIL,[user_email])