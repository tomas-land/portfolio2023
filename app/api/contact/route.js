import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || "");
export async function POST(request) {
  // const { name, email, message } = await request.json();


  // const connectedStrings = name+email+message;
  // console.log(connectedStrings);
  const msg = {
    to: "tomaslanda1989@gmail.com",
    from: "tomaslanda1989@gmail.com",
    subject: "Tomas sent you a message from Toams",
    text: message,
  };
  (async () => {
    try {
      await sendgrid.send(msg);
    } catch (error) {
      console.error(error);
  
      if (error.response) {
        console.error(error.response.body)
      }
    }
  })();
  // try {
  //   await sendgrid.send(msg);
  //   // console.log('email sent');
  //   // return new Response({ status: 200 });
  // } catch (error) {
  //   console.log(error);
  //   return new Response({ status: 500 ,message: "api error"});
  // }
}

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
