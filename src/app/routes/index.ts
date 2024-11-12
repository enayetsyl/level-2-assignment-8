import express from "express"
import { BookRoutes } from "../modules/Book/book.route"
import { MemberRoutes } from "../modules/Member/member.route"
import { BorrowRoutes } from "../modules/Borrow/borrow.route"
import { ReturnRoutes } from "../modules/Return/return.route"


const router = express.Router()

// Storing all the routes

const moduleRoutes = [
  {
    path: '/books',
    route: BookRoutes
  },
  {
    path: '/members',
    route: MemberRoutes
  },
  {
    path: '/borrow',
    route: BorrowRoutes
  },
  {
    path: '/return',
    route: ReturnRoutes
  }
]

// creating all routes

moduleRoutes.forEach(route => router.use(route.path, route.route))


export default router;