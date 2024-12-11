import { sendEmail } from '@/utils/send-grid/sendEmail';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { to, subject, text, html } = body;

    await sendEmail({ to, subject, text, html });

    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send email' }),
      { status: 500 }
    );
  }
}
