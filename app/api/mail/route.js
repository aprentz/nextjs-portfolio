const sgMail = require('@sendgrid/mail')

sgMail.setApiKey('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')
export async function POST(req, res) {
   const body = await req.json()
   console.log(body)

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
   }
   try {
      await sgMail.send(data)
         .then(() => {
            console.log('Email sent')
         })
   } catch (error) {
      console.error(error)
   }






return new Response(JSON.stringify({ status: "ok" }))
}
