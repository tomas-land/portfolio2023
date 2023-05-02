import sendgrid from "@sendgrid/mail";

export async function POST(request: Request) {
  // const { name, email, message } = await request.json();
  // sendgrid.setApiKey(process.env.SENDGRID_API_KEY || "");
  // const msg = {
  //   to: "tomaslanda1989@gmail.com",
  //   from: "tomaslanda1989@gmail.com",
  //   subject: `${name} sent you a message from ${email}`,
  //   text: message,
  // };
  // try {
  //   await sendgrid.send(msg);
  //   return new Response("Message sent successfully", {status: 200,});
  // } catch (error) {
  //   console.error(error);
  // }
}
