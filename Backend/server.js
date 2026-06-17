import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRouter);

app.listen(PORT, () => {
  connectDb()
  console.log(`Server is running on port ${PORT}`);
});