import { Updateblog, allBlog, createBlog } from "#/controller/blog";
import { Router } from "express";
import fileParser from "middleware/fileparser";
import { mustAuth } from "middleware/mustAuth";


const router = Router();


// router.post('/create', createBlog);
router.get('/all-blog', allBlog);
router.patch('/:blofId', Updateblog);

export default router