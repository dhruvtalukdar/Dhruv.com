import express from "express";
import dotenv from "dotenv";
import contactRoute from "./routes/contact.route.js";
import connectDb from "./config/mongoose-connection.js";
import cors from "cors";

dotenv.config();

const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());

// cors
app.use(cors({
    origin: 'http://localhost:8081',
    credentials: true,
}));

// routes
app.use('/api', contactRoute);

app.use('/', (req, res) => {
    res.status(200).json({ message: "Success" });
})
app.listen(port, () => {
    connectDb();
    console.log(`App is listening on port ${port}`);
})