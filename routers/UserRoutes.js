import express from "express";
import * as UserController from "../controllers/UserController.js";
import authHandler from "../middleware/authHandler.js";

const userRoutes = express.Router();

userRoutes.use(authHandler);

// REGISTER
userRoutes.post("/register", UserController.register);
// LOGIN
userRoutes.post("/login", UserController.login);


export default userRoutes;
