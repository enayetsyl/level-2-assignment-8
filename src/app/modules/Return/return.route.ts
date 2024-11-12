import express from 'express'
import {ReturnController } from './return.controller';

const router = express.Router()
// Route for book return 

router.post('/',ReturnController.returnABook);



export const ReturnRoutes = router;