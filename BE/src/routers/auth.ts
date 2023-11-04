import { createUser, loginUser, logoutUser } from "#/controller/user";
import { Router } from "express";
import { mustAuth } from "middleware/mustAuth";


const router = Router();


router.post('/create', createUser)
router.post('/login', loginUser)
router.post('/logout', mustAuth, logoutUser)

export default router