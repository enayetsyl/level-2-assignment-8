import prisma from "../../shared/prisma"



const borrowABook = async (data: { bookId: string, memberId: string}) =>{
  console.log('bookid, member id', data)
  const result =  await prisma.borrowRecord.create({data:
    {
      ...data, 
      borrowDate: new Date(),
      
    }
  })
  
  return result;
}

const overdueBookList = async () => {
  const fourteenDaysAgo = new Date();
  fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);

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
          title: true, // Fetch the book title
        },
      },
      member: {
        select: {
          name: true, // Fetch the member name
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