import express from "express";
const router = express.Router();

router.post('/contact', submitContactForm);

export default router;