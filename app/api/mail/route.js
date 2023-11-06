const sgMail = require('@sendgrid/mail');
const key = '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';

sgMail.setApiKey(process.env.SENGRID_API_KEY);

export async function POST(req, res) {
  const body = await req.json();
  console.log(body);

  const message = `
    Name: ${body.name}<br><br>
    Email: ${body.email}<br><br>
    Message: ${body.message}
  `;

  const data = {
    to: 'sarah.m.manssour@gmail.com', // Change to your recipient
    from: 'support@aprentz.com', // Change to your verified sender
    subject: 'Test successful!',
    text: message,
    html: `<strong>${message}</strong>`,
  };

  try {
    await sgMail.send(data);
    console.log('Email sent');
    return new Response(JSON.stringify({ status: 'ok' }));
  } catch (error) {
    console.error(error);

    if (error.response && error.response.body && error.response.body.errors) {
      // Access the error response body
      const errorMessages = error.response.body.errors;
      console.error('Error Messages:', errorMessages);

      // Return a response with both status and error information
      return new Response(JSON.stringify({ status: 'error', error: errorMessages }), { status: 500 });
    }

    // Handle other errors or rethrow the original error
    throw error;
  }
}
