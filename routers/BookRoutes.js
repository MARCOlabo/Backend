import * as BookController from "../controllers/BookController.js";
import express from "express";

const routes = express.Router();

routes.get('/all', BookController.fetchBooks);
routes.post('/new', BookController.createBook);
routes.put('/edit/:bookId', BookController.editBook);
routes.delete('/delete/:bookId', BookController.removeBook);


export default routes;