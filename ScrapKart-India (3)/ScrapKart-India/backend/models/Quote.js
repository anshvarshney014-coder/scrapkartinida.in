import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: [2, "Full name must be at least 2 characters"],
      maxlength: [80, "Full name must be under 80 characters"],
    },
    mobileNumber: {
      type: String,
      required: [true, "Mobile number is required"],
      trim: true,
      match: [/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"],
    },
    vehicleMakeModel: {
      type: String,
      required: [true, "Vehicle make & model is required"],
      trim: true,
      maxlength: [120, "Vehicle make & model must be under 120 characters"],
    },
    city: {
      type: String,
      required: [true, "City is required"],
      enum: {
        values: ["Delhi NCR", "Mumbai", "Jaipur", "Ranchi", "Hyderabad", "Other"],
        message: "Select a valid city",
      },
    },
    status: {
      type: String,
      enum: ["new", "contacted", "scheduled", "completed", "closed"],
      default: "new",
    },
  },
  { timestamps: true }
);

quoteSchema.index({ createdAt: -1 });

const Quote = mongoose.model("Quote", quoteSchema);

export default Quote;
