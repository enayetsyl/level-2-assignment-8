import prisma from "../../shared/prisma"
import { IMember } from "./member.interface"


const createAMember = async (data: IMember) =>{
  const result =  await prisma.member.create({data:data})
  
  return result;
}

const getAllMembers = async () => {
  const result = await prisma.member.findMany()

  return result;
}

const getMemberById = async (id: string) => {
  const result = await prisma.member.findUniqueOrThrow({
    where: {
      memberId: id
    }
  })
  return result;
}

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