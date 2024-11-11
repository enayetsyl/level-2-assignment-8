import express from 'express'
import {BorrowController } from './borrow.controller';

const router = express.Router()

router.post('/',BorrowController.borrowABook);

router.get('/overdue', BorrowController.overdueBookList)



export const BorrowRoutes = router;