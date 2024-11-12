import prisma from "../../shared/prisma"

// Service function for returning a book

const returnABook = async (id : string) =>{
  console.log(id)
  const isRecordExist = await prisma.borrowRecord.findUnique({
    where: {
      borrowId: id
    }
  })
  
   // Check if the record exists
   if (!isRecordExist) {
    throw new Error("Borrow record not found.");
  }

  // Check if the book has already been returned
  if (isRecordExist.returnDate !== null) {
    throw new Error("Book has already been returned.");
  }

  const result = await prisma.borrowRecord.update({
    where: {
      borrowId: id
    },
    data: { 
      returnDate: new Date()
    }
  });
  

  return result;
}


export const ReturnService = {
  returnABook
}