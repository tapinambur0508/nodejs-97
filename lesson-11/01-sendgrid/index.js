import "dotenv/config";

import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const message = {
  to: ["vmudrij0508@gmail.com"],
  from: "tim@apple.com",
  subject: "iPhone Sale Tonight",
  html: `<h1 style="color: red;">Click on link and get 90% discount on new iPhone 15 Pro Max</h1>`,
  text: `Click on link and get 90% discount on new iPhone 15 Pro Max`,
};

sgMail.send(message).then(console.log).catch(console.error);
