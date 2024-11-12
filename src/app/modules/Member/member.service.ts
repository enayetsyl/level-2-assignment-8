import prisma from "../../shared/prisma"
import { IMember } from "./member.interface"

// Service fucntion for creating a member
const createAMember = async (data: IMember) =>{
  const result =  await prisma.member.create({data:data})
  
  return result;
}

// service function for getting all members

const getAllMembers = async () => {
  const result = await prisma.member.findMany()

  return result;
}

// service function for getting a member
const getMemberById = async (id: string) => {
  const result = await prisma.member.findUniqueOrThrow({
    where: {
      memberId: id
    }
  })
  return result;
}

// service function for updating a member
const updateAMember = async (id: string, data: Partial<IMember>) => {
  await prisma.member.findUniqueOrThrow({
    where: {
      memberId: id
    }
  })

  const result = await prisma.member. update({
    where:{
      memberId: id
    }, data
  })

    return result;

}

// service function for deleting a member
const deleteAMember = async (id: string)=>{
  const result = await prisma.member.delete({
    where:{
      memberId: id
    }
  })

  return result;
}

export const MemberService = {
  createAMember,
  getAllMembers, getMemberById, updateAMember, deleteAMember
}