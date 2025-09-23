import mongoose from "mongoose";
import validator from "validator";

const customerSchema = new mongoose.Schema(
    {
        name:{
            required : [true, "Enter your name"],
            type : String,
            minlength : 3,
            trim: true

        }, 

        email :{
            required : [true, "Enter your email"],
            type : String,
            unique : true,
            lowercase : true,
            trim: true,
            validate : [validator.isEmail, "Enter a valid email"]
        },

        mobile : {
            required : [true, "Enter your Mobile No"],
            type : String,
            unique: true,
            trim: true,
            match: [/^\d{10}$/, "Enter a valid 10-digit mobile number"]
        },

        age : {
            required : [true, "Enter your Age"],
            type : Number,
            min: 18, 

        },

        gender : {
            required : [true, "Enter your Gender"],
            type : String,
            enum : ["Male", "Female", "Other"]
        }
    }
);

const Customer = mongoose.model("Customer", customerSchema);
export default Customer;