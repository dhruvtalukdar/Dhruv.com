// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');

// // POST route to save form data
// router.post('/submit', async (req, res) => {
//     try {
//         const { name, email, message } = req.body;
//         const newUser = new User({ name, email, message });
//         await newUser.save();
//         res.status(201).json({ message: 'Form submitted successfully' });
//     } catch (err) {
//         res.status(500).json({ error: 'Error saving data' });
//     }
// });

// router.get('/', async (req, res) => {
//     res.status(200).json({ message: 'All users' });
// });

// module.exports = router;
