import Quote from "../models/Quote.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";

// @route   POST /api/quotes
// @desc    Submit a new instant-quote request
export const createQuote = asyncHandler(async (req, res) => {
  const { fullName, mobileNumber, vehicleMakeModel, city } = req.body;

  if (!fullName || !mobileNumber || !vehicleMakeModel || !city) {
    throw new ApiError(400, "All fields are required", [
      "fullName, mobileNumber, vehicleMakeModel and city are required",
    ]);
  }

  const quote = await Quote.create({
    fullName,
    mobileNumber,
    vehicleMakeModel,
    city,
  });

  res.status(201).json({
    success: true,
    message: "Thanks! Your request is in. Our team will call you shortly.",
    data: quote,
  });
});

// @route   GET /api/quotes
// @desc    List quote requests (admin use)
export const getQuotes = asyncHandler(async (req, res) => {
  const quotes = await Quote.find().sort({ createdAt: -1 });
  res.status(200).json({ success: true, count: quotes.length, data: quotes });
});
