import Contact from "../models/Contact.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";

// @route   POST /api/contact
// @desc    Submit the contact-us form
export const createContactMessage = asyncHandler(async (req, res) => {
  const { fullName, mobileNumber, email, subject, message } = req.body;

  if (!fullName || !mobileNumber || !subject || !message) {
    throw new ApiError(400, "Please fill in all required fields", [
      "fullName, mobileNumber, subject and message are required",
    ]);
  }

  const contactMessage = await Contact.create({
    fullName,
    mobileNumber,
    email,
    subject,
    message,
  });

  res.status(201).json({
    success: true,
    message: "Message received! Our team will reach out shortly.",
    data: contactMessage,
  });
});

// @route   GET /api/contact
// @desc    List contact messages (admin use)
export const getContactMessages = asyncHandler(async (req, res) => {
  const messages = await Contact.find().sort({ createdAt: -1 });
  res.status(200).json({ success: true, count: messages.length, data: messages });
});
