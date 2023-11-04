import { createUser, loginUser, logoutUser } from "#/controller/user";
import { Router } from "express";
import { mustAuth } from "middleware/mustAuth";


const router = Router();
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true })); 

router.post('/create', createUser)
router.post('/login', mustAuth, loginUser)
router.post('/logout', mustAuth, logoutUser)

export default router