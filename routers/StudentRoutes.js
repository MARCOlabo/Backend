import { fetchStudent } from "../controllers/StudentConTroller.js";
import express from "express";

const studentRoutes = express.Router();

studentRoutes.get('/all', fetchStudent);

export default studentRoutes;