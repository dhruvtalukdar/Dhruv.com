import express from "express";
import { submitContactForm } from "../controllers/contact.controller.js";
const router = express.Router();

router.post('/contact', submitContactForm);

router.get('/', (req, res) => {
    res.status(200).json({ message: "You're in the contact route"});
})

export default router;