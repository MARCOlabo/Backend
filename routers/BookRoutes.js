import { fetchBooks } from "../controllers/BookController.js";

import express from "express";

const routes = express.Router();

routes.get('/all', fetchBooks);


export default routes;