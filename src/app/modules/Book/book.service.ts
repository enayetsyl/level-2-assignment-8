import prisma from "../../shared/prisma"
import { IBook } from "./book.interface"


const createABook = async (data: IBook) =>{
  const result =  await prisma.book.create({data:data})
  
  return result;
}

const getAllBooks = async () => {
  const result = await prisma.book.findMany()

  return result;
}

const getBookById = async (id: string) => {
  const result = await prisma.book.findUniqueOrThrow({
    where: {
      bookId: id
    }
  })
  console.log('result', result)
  return result;
}

const updateABook = async (id: string, data: Partial<IBook>) => {
  await prisma.book.findUniqueOrThrow({
    where: {
      bookId: id
    }
  })

  const result = await prisma.book. update({
    where:{
      bookId: id
    }, data
  })

    return result;

}


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