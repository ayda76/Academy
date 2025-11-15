from celery import shared_task
from django.core.mail import send_mail
from django.conf import settings

@shared_task
def send_confirmation_email_enroll(course_name,term_start,user_email):
    subject='enrollment confirmation'
    text=f'Thanks for submitting to course ({course_name}). your term will start at{term_start} .we hope to see you soon '
    print(f"[DEBUG] Sending email for enrolling to {course_name} by {user_email}")
    
    return send_mail(subject,text,settings.DEFAULT_FROM_EMAIL,[user_email])