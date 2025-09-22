import nodemailer from "nodemailer";

export const sendEmail = async (options) => {
  try {
    // 1. Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g., smtp.gmail.com
      port: process.env.SMTP_PORT, // 587 (TLS) or 465 (SSL)
      secure: process.env.SMTP_PORT == 465, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER, // your email
        pass: process.env.SMTP_PASS, // your email password / app password
      },
    });

    // 2. Send email
    const mailOptions = {
      from: `"Stramco Support" <${process.env.SMTP_USER}>`,
      to: options.email,
      subject: options.subject,
      html: options.message,
    };

    await transporter.sendMail(mailOptions);
    console.log("📧 Email sent successfully");
  } catch (error) {
    console.error("❌ Email send error:", error.message);
    throw new Error("Email could not be sent");
  }
};
