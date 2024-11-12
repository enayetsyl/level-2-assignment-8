import prisma from "../../shared/prisma"


// Service function for borrowing a book
const borrowABook = async (data: { bookId: string, memberId: string}) =>{
  const result =  await prisma.borrowRecord.create({data:
    {
      ...data, 
      borrowDate: new Date(),
    }
  })
  return result;
}

// Service function for getting overdue book list

const overdueBookList = async () => {
  // Calculating 14 days earlier than today
  const fourteenDaysAgo = new Date();
  fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);

  // Based on 14 days overdue limit find out the book list and populating book title and member name who borrowed the book
  const overdueBooks = await prisma.borrowRecord.findMany({
    where: {
      returnDate: null,
      borrowDate: {
        lt: fourteenDaysAgo,
      },
    },
    include: {
      book: {
        select: {
          title: true, 
        },
      },
      member: {
        select: {
          name: true, 
        },
      },
    },
  });

  // Map the results to include the desired fields
  const formattedOverdueBooks = overdueBooks.map(record => ({
    borrowId: record.borrowId,
    bookTitle: record.book.title,
    borrowerName: record.member.name,
    overdueDays: Math.floor((new Date().getTime() - record.borrowDate.getTime()) / (1000 * 3600 * 24)), // Calculate overdue days
  }));

  return formattedOverdueBooks;
}


export const BorrowService = {
  borrowABook, overdueBookList
}