import prisma from "../../shared/prisma"
import { IBook } from "./book.interface"

// service function for creating a book
const createABook = async (data: IBook) =>{
  const result =  await prisma.book.create({data:data})
  
  return result;
}

// service function for getting all books
const getAllBooks = async () => {
  const result = await prisma.book.findMany()

  return result;
}

// service function for getting a book
const getBookById = async (id: string) => {
  const result = await prisma.book.findUniqueOrThrow({
    where: {
      bookId: id
    }
  })
  return result;
}

// service function for updating all books
const updateABook = async (id: string, data: Partial<IBook>) => {
  // searching whether book exist into db
  await prisma.book.findUniqueOrThrow({
    where: {
      bookId: id
    }
  })

  // updating the book 
  const result = await prisma.book. update({
    where:{
      bookId: id
    }, data
  })

    return result;
}

// service function for deleting a book using book id
const deleteABook = async (id: string)=>{
  const result = await prisma.book.delete({
    where:{
      bookId: id
    }
  })

  return result;
}

export const BookService = {
  createABook,
  getAllBooks, getBookById, updateABook, deleteABook
}