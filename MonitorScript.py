import smtplib


EMAIL_ADDRESS = "admin@thealphaflickr.xyz"
EMAIL_PASSWORD = "Admin1234a"
recipients = ["ahmadgadallah4@gmail.com","ziadmansour.4.9.2000@gmail.com"]


def notify_user():
    with smtplib.SMTP('smtp.zoho.com', 587) as smtp:
        smtp.ehlo()
        smtp.starttls()
        smtp.ehlo()
        smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        subject = 'FLICKR SERVER IS DOWN'
        body = 'the server is down, make sure to get it back up ASAP'
        msg = f'Subject: {subject}\n\n{body}'
        # logging.info('Sending Email...')
        smtp.sendmail(EMAIL_ADDRESS, recipients, msg)


notify_user()