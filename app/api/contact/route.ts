import Mailgun from "mailgun.js";
import formData from "form-data";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  console.log(name, email, message);
  const API_KEY = process.env.MAILGUN_API_KEY || "";
  const DOMAIN = process.env.MAILGUN_DOMAIN || "";
  const mailgun = new Mailgun(formData);
  const client = mailgun.client({ username: "api", key: API_KEY });

  const messageData = {
    from: `Portfolio contact form ${email}`,
    to: "tomaslanda1989@gmail.com",
    subject: `message from ${name}`,
    text: message,
  };

  try {
    const response = await client.messages.create(DOMAIN, messageData)
    console.log(response);
    return new Response("Message sent successfully", { status: 200 });
  } catch (error) {
    console.error(error);
  }
}
