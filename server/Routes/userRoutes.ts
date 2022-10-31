import express from "express";
import { createUser, logIn } from "../Controllers/userController";

const userRoutes = express.Router();

userRoutes.route("/").post(logIn).post(createUser);

export default userRoutes;
