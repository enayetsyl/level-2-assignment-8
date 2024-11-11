import express from 'express'
import {ReturnController } from './return.controller';

const router = express.Router()

router.post('/',ReturnController.returnABook);



export const ReturnRoutes = router;