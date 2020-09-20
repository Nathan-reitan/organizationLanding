/* eslint-disable */

require('dotenv/config');
const express = require('express');
const nodemailer = require('nodemailer');

const staticMiddleware = require('./static-middleware');

const app = express();

app.use(staticMiddleware);
app.use(express.json());

async function main(contactInfo) {
  const transport = nodemailer.createTransport({
    host: 'reitanfamily.com',
    port: 465,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS
    },
    secure: true
  });

  const info = await transport.sendMail({
    from: '"EFO - Electronic Filing Organization" <nathan@reitanfamily.com>',
    to: 'nathanreitan@gmail.com',
    subject: `EFO Contact form from ${contactInfo.first} ${contactInfo.last}`,
    text: `
      Name: ${contactInfo.first} ${contactInfo.last},
      Phone: ${contactInfo.phone},
      Email: ${contactInfo.email},
      Message: ${contactInfo.message}
    `,
    html: `<ol>
            <li>Name: ${contactInfo.first} ${contactInfo.last},</li>
            <li>Phone: ${contactInfo.phone},</li>
            <li>Email: ${contactInfo.email},</li>
            <li>Message: ${contactInfo.message},</li>
          </ol>

    `
  });
  // eslint-disable-next-line no-console
  console.log('Message send" %s', info.messageId);
  // eslint-disable-next-line no-console
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}

app.post('/api/contact', (req, res) => {
  const contactInfo = {first: req.body.firstName, last: req.body.lastName, phone: req.body.phone, email: req.body.email, message: req.body.message}
  main(contactInfo).catch(console.error);
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
