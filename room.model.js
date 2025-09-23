import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    roomNo: {
        required: true,
        type: Number,
        unique: true,
        index: true
    },

    basePrice: {
        required: true,
        type: Number,
    },

    roomType: {
        type: String,
        required : [true, "Enter the room type: "],
        enum: ['SINGLE BEDROOM', 'DOUBLE BEDROOM'],
        default: 'SINGLE BEDROOM'
    },

    priceChanges: [
        {
            date: Date,
            price: Number
        }
    ],

    availability: [
        {
            date: Date,
            status: {
                type: String,
                enum: ['AVAILABLE', 'BOOKED'],
            }
        }
    ]
});

const Room = mongoose.model("Room", roomSchema);

export default Room;
