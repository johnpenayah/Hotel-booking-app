import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    bookingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentDate: {
      type: Date,   
      default: null,
    },
    status: {
      type: String,
      enum: ["PAID", "PENDING", "REFUNDED"],
      default: "PENDING",
    },
    paymentMethod: {
      type: String,
      required: [true, "Enter the payment method"],
      enum: ["UPI", "CASH", "Net Banking", "CARD"],
    },
    advancePaid: {
      type: Boolean,
      default: false, 
    },
    advanceAmount: {
      type: Number,
      default: 500, 
    },
    advanceRefunded: {
      type: Boolean,
      default: false, 
    },
  }
);

const Payment = mongoose.model("Payment", paymentSchema);
export default Payment;
