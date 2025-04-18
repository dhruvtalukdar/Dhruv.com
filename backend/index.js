import express from "express";
import dotenv from "dotenv";
import contactRoute from "./routes/contact.route.js";
import connectDb from "./config/mongoose-connection.js";

dotenv.config();

const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.use('/api', contactRoute);

app.use('/', (req, res) => {
    res.status(200).json({ message: "Success" });
})
app.listen(port, () => {
    connectDb();
    console.log(`App is listening on port ${port}`);
})