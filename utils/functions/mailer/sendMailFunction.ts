import { EmailInput } from '@/utils/send-grid/sendEmail';

export const sendEmail = async ({ to, subject, text, html }: EmailInput) => {
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      to,
      subject,
      text,
      html
    })
  });

  // if (response.ok) {
  //   alert('Email sent successfully!');
  // } else {
  //   const data = await response.json();
  //   alert(`Failed to send email: ${data.error}`);
  // }
};
