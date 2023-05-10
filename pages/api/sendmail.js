import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "tomaslanda1989@gmail.com", // Your email where you'll receive emails
      from: "tomaslanda1989@gmail.com", // your website email address here
      subject: "message from your website",
      text: "old api",
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;