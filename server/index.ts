import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./Routes/userRoutes";
import postRoutes from "./Routes/postsRoutes";
import { connectToMongoose } from "./config/database";
const app: Application = express();

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());


app.use("/user", userRoutes);
app.use("/posts", postRoutes);

connectToMongoose(app);
