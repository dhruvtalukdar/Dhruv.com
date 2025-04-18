import contactMessage from "../models/contactMessage.model.js";

export const submitContactForm = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields are required "});
        }

        const newContactMessage = await contactMessage.create({
            name, 
            email,
            message
        });

        res.status(201).json(newContactMessage);
    }
    catch(error) {
        console.error("Error submiting the form:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}