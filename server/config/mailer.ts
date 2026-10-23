import { Resend } from "resend";

interface ContactEmailData {
  name: string;
  email: string;
  message: string;
}

export const sendContactNotification = async (
  data: ContactEmailData,
): Promise<void> => {
  const apiKey = process.env.RESEND_API_KEY;
  const notificationEmail = process.env.NOTIFICATION_EMAIL;

  if (!apiKey || !notificationEmail) {
    throw new Error(
      "Missing RESEND_API_KEY or NOTIFICATION_EMAIL in environment variables.",
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
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

  if (error) {
    console.error("Resend email error:", error);
    throw new Error(`Failed to send contact notification: ${error.message}`);
  }
};
