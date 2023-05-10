import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export async function POST(request) {
  const { name, clientEmail, message } = await request.json();

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email,
      pass,
    },
  });

  const mailOptions = {
    from: email,
    to: email,
  };

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `Message from ${name} - ${clientEmail}`,
      text: message,
    });
    return new Response( { status: 200, message: "success" });
  } catch (error) {
    console.log(error);
    return new Response({ status: 400, message: error.message });
  }
  return new Response({ status: 400, message: "bad request" });
}
