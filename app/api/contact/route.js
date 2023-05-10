import nodemailer from "nodemailer";

const emailnode = process.env.EMAIL;
const passnode = process.env.EMAIL_PASS;

export async function POST(request) {
  const { name, email, message } = await request.json();

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailnode,
      passnode,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: email,
      subject: `Message from ${name} ${email}`,
      text: message,
    });
    return new Response({ status: 200 });
  } catch (error) {
    console.log(error);
    return new Response({ status: 400, message: error.message });
  }
  return new Response({ status: 400, message: "bad request" });
}
//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: "bar@example.com, baz@example.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);

// import sendgrid from "@sendgrid/mail";

// sendgrid.setApiKey(process.env.SENDGRID_API_KEY || "");
// export async function POST(request) {
//   // const { name, email, message } = await request.json();
//   return Response.json({msg: "hello"});
// }
//   const msg = {
//     to: "tomaslanda1989@gmail.com",
//    from: "tomaslanda1989@gmail.com",
//    subject: "Tomas sent you a message from Toams",
//    text: "message",
// }
//   try {
//     await sendgrid.send(msg);
//     // console.log('email sent');
//     // return new Response({ status: 200 });
//   } catch (error) {
//     console.log(error);
//     return new Response({ status: 500 ,message: "api error"});
//   }
//   return new Response({ status: 200 });

// const connectedStrings = name+email+message;
// console.log(connectedStrings);
// const msg = {
//   to: "tomaslanda1989@gmail.com",
//   from: "tomaslanda1989@gmail.com",
//   subject: "Tomas sent you a message from Toams",
//   text: "message",
// };
// (async () => {
//   try {
//     await sendgrid.send(msg);
//   } catch (error) {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body)
//     }
//   }
// })();
// try {
//   await sendgrid.send(msg);
//   // console.log('email sent');
//   // return new Response({ status: 200 });
// } catch (error) {
//   console.log(error);
//   return new Response({ status: 500 ,message: "api error"});
// }

// async function sendEmail(req, res) {
//   try {
//     // console.log("REQ.BODY", req.body);
//     await sendgrid.send({
//       to: "tomaslanda1989@gmail.com", // Your email where you'll receive emails
//       from: "tomaslanda1989@gmail.com", // your website email address here

//       subject: `${req.body.name} sent you a message from ${req.body.email}`,
//     });
//   } catch (error) {
//     // console.log(error);
//     return res.status(error.statusCode || 500).json({ error: error.message });
//   }

//   return res.status(200).json({ error: "" });
// }

// export default sendEmail;
