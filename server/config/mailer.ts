import nodemailer from "nodemailer";

interface ContactEmailData {
  name: string;
  email: string;
  message: string;
}

export const sendContactNotification = async (
  data: ContactEmailData,
): Promise<void> => {
  // Read the environment variables when the function runs.
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const notificationEmail = process.env.NOTIFICATION_EMAIL;

console.log("Email configuration check:", {
  EMAIL_USER: Boolean(emailUser),
  EMAIL_PASS: Boolean(emailPass),
  NOTIFICATION_EMAIL: Boolean(notificationEmail),
});

  if (!emailUser || !emailPass || !notificationEmail) {
    throw new Error(
      "Missing EMAIL_USER, EMAIL_PASS, or NOTIFICATION_EMAIL in .env",
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact Form" <${emailUser}>`,
    to: notificationEmail,
    replyTo: data.email,
    subject: `New portfolio message from ${data.name}`,
    text: [
      "You have received a new message through your portfolio.",
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      "",
      "Message:",
      data.message,
    ].join("\n"),
  });
};
