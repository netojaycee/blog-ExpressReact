import { Deleteblog, GetSingleBlog, Updateblog, allBlog, createBlog } from "#/controller/blog";
import { Router } from "express";
import { mustAuth } from "middleware/mustAuth";


const router = Router();

router.post('/create',  createBlog);
router.get('/all-blog', allBlog);
router.patch('/:blogId',  Updateblog);
router.delete('/:blogId', Deleteblog);
router.get('/:blogId', GetSingleBlog);

export default router