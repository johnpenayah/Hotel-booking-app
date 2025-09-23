import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
    {
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer",
            required: true,
            index: true
        },
        room: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Room",
            required: true,
            index: true
        },
        check_In: {
            type: Number,
            required: true
        },
        check_Out: {
            type: Number,
            required: true,
            validate: {
                validator: function (value) {
                    return value > this.check_In;
                },
                message: "Check-Out date must be after Check-In date"
            }
        },
        noOfGuests: {
            type: Number,
            required: true,
            min: 1
        },
        // Add this new field for storing guest information
        guests: [{
            name: String,
            age: Number,
            gender: String
        }],
        price: {
            type: Number,
            required: true
        },
        totalAmount: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            enum: ["CONFIRMED", "PENDING", "CANCELLED"],
            default: "CONFIRMED"
        },
        source: {
            type: String,
            enum: ["WEBSITE", "DIRECT"],
            required: true
        }
    },
    { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;