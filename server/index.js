require('dotenv/config');
const express = require('express');
const nodemailer = require('nodemailer');

const db = require('./database');
const staticMiddleware = require('./static-middleware');

const app = express();

const button = document.getElementById('contactButton')

app.use(staticMiddleware);
app.use(express.json());

// const contact = document.getElementById('contact')

function handleSubmit(event){
  event.preventDefault();
  let first = document.getElementById('first').value
  let last = document.getElementById('last').value
  let phone = document.getElementById('phone').value
  let email = document.getElementById('email').value
  let message = document.getElementById('message').value
  console.log(first)
}

async function main() {
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
    from: '"Organization testing" <nathan@reitanfamily.com>',
    to: 'nathanreitan@gmail.com',
    subject: 'nodemailer testing',
    text: `
      Success
    `,
    html: `<h1>Success</h1>`
  });
  // eslint-disable-next-line no-console
  console.log('Message send" %s', info.messageId);
  // eslint-disable-next-line no-console
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}

app.post('/api/contact'. (req, res)=>{
  main().catch(console.error)
})

button.addEventListener('click', handleSubmit())

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
