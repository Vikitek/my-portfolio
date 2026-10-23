import type { Request, Response } from "express";
import Contact from "../models/Contact";
import { sendContactNotification } from "../config/mailer";

export const submitContact = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    // 1. Validate the request body
    if (!req.body || typeof req.body !== "object" || Array.isArray(req.body)) {
      res.status(400).json({
        success: false,
        message: "Please provide valid contact details.",
      });
      return;
    }

    const { name, email, message } = req.body;

    // 2. Ensure all required fields are strings
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      res.status(400).json({
        success: false,
        message: "Name, email, and message are required.",
      });
      return;
    }

    // 3. Clean the submitted values
    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanMessage = message.trim();

    // 4. Validate the name
    if (cleanName.length < 2 || cleanName.length > 100) {
      res.status(400).json({
        success: false,
        message: "Name must be between 2 and 100 characters.",
      });
      return;
    }

    // 5. Validate the email address
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (cleanEmail.length > 254 || !emailPattern.test(cleanEmail)) {
      res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
      return;
    }

    // 6. Validate the message
    if (cleanMessage.length < 10 || cleanMessage.length > 5000) {
      res.status(400).json({
        success: false,
        message: "Message must be between 10 and 5000 characters.",
      });
      return;
    }

    // 7. Save the message to MongoDB
    const newContact = await Contact.create({
      name: cleanName,
      email: cleanEmail,
      message: cleanMessage,
    });

    // 8. Send an email notification
    try {
      await sendContactNotification({
        name: newContact.name,
        email: newContact.email,
        message: newContact.message,
      });
    } catch (emailError) {
      // The message is already saved, even if email delivery fails.
      console.error("Contact notification email failed:", emailError);
    }

    // 9. Respond to the frontend
    res.status(201).json({
      success: true,
      message: "Message sent successfully!",
      contactId: newContact._id,
    });
  } catch (error) {
    console.error("Error submitting contact:", error);

    res.status(500).json({
      success: false,
      message: "Unable to send your message right now. Please try again later.",
    });
  }
};
