import * as BookController from "../controllers/BookController.js";
import express from "express";
import authHandler from "../middleware/authHandler.js"; 

const routes = express.Router();

routes.use(authHandler);

routes.get('/all', BookController.fetchBooks);
routes.post('/new', BookController.createBook);
routes.put('/edit/:bookId', BookController.editBook);
routes.delete('/delete/:bookId', BookController.removeBook);


export default routes;