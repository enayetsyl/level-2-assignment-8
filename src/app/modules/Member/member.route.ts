import express from 'express'
import { MemberController } from './member.controller';

const router = express.Router()

// route for members
router.post('/', MemberController.createAMember);

router.get("/", MemberController.getAllMembers);

router.get("/:id", MemberController.getMemberById);

router.put("/:id", MemberController.updateAMember)

router.delete("/:id", MemberController.deleteAMember)

export const MemberRoutes = router;