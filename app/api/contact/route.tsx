// File: app/api/contact/route.ts

import { NextResponse } from "next/server";
import { render } from "@react-email/components";
import nodemailer from "nodemailer";
import ContactEmail from "@/app/emails/ContactEmail";

// const transporter = nodemailer.createTransport({
//   host: "smtp.forwardemail.net",
//   port: 465,
//   secure: true,
//   auth: {
//     user: process.env.EMAIL_USER, 
//     pass: process.env.EMAIL_PASS, 
//   },
// });

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    console.log('Received contact form data:', { name, email, message });

    // Render our React-Email template to HTML
    // const emailHtml = await render(
    //   <ContactEmail name={name} email={email} message={message} />
    // );

    // // Prepare mail options
    // const mailOptions = {
    //   // from: `"${name}" ${email} `,
    //   from: process.env.EMAIL_FROM,
    //   to: process.env.EMAIL_RECEIVER, 
    //   subject: `New Contact Form ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    //   html: emailHtml,
    // };

    // // Send it!
    // await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Error in API route:", err);
    return NextResponse.json(
      { success: false, error: "Email sending failed" },
      { status: 500 }
    );
  }
}
