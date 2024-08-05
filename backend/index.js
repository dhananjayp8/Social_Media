import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDb from "./utility/db.js";

dotenv.config({});

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Backend",
    succes: true,
  });
});

//middlewares

app.use(express.json());
app.use(cookieParser);
app.use(urlencoded({ extended: true }));

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

const PORT = process.env.PORT;
app.listen(PORT, () => {
  connectDb();
  console.log(`Server started at ${PORT}`);
});
