import mongoose from "mongoose";

const contactMessageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
       match: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
    },
    message: {
        type: String,
        required: true,
        minLength: 10
    }
}, {
    timestamps: true
});

export default mongoose.model("ContactMessage", contactMessageSchema);