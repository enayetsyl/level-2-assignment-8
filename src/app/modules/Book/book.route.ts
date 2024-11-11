import express from 'express'
import { BookController } from './book.controller';

const router = express.Router()

router.post('/', BookController.createABook);

router.get("/", BookController.getAllBooks);

router.get("/:id", BookController.getBookById);

router.put("/:id", BookController.updateABook)

router.delete("/:id", BookController.deleteABook)

export const BookRoutes = router;