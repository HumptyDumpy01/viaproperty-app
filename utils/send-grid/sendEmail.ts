import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export type EmailInput = {
  to: string;
  subject: string;
  text: string;
  html: string;
}

export const sendEmail = async ({ to, subject, text, html }: EmailInput) => {
  const fromEmail = process.env.SENDGRID_FROM;
  if (!fromEmail) {
    throw new Error('FROM_EMAIL environment variable is not defined');
  }

  const msg = {
    to,
    from: fromEmail,
    subject,
    text,
    html
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully');
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error sending email:', error.message);
    } else {
      console.error('Unknown error sending email');
    }
    throw new Error('Email sending failed');
  }
};