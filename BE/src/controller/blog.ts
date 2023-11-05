import { RequestHandler } from "express";
import { db } from "..";
import formidable from 'formidable'
import bcrypt from "bcrypt"
import path from "path"

interface RequestWithFiles extends Request{
    files?:{[key:string]: File}
}

// export const createBlog: RequestHandler = async (req, res) =>{
//     const {title, description, tag, time, image } = req.body
//     const photo = req.files?.image as formidable.File

//     const blogs = 'INSERT INTO blogs (`title`, `description`, `tag`, `time`, `image`) VALUES (?, ?, ?, ?, ?)';
//     const values = [title, description, tag, time, image];

//     db.query(blogs, values, (dbErr, result) => {
//       if (dbErr) { 
//         console.error(dbErr);
//         return res.status(500).json({ error: 'Internal Server Error' });
//       }
//       return res.json({ message: 'Blog created successfully', values });
//     });

// }


// export const createBlog: RequestHandler = async (req, res) => {
//     const { title, description, tag, time } = req.body;
  
//     const form = new formidable.IncomingForm();
//     form.uploadDir = 'images/';
  
//     form.parse(req, (err, fields, files) => {
//       if (err) {
//         console.error(err);
//         return res.status(500).json({ error: 'Internal Server Error' });
//       }
  
//       if (!files.image) {
//         return res.status(400).json({ error: 'No image provided' });
//       }
  
//       const imagePath = files.image.path;
  
//       const newImagePath = 'images/' + files.image.name;
//       fs.rename(imagePath, newImagePath, (moveErr) => {
//         if (moveErr) {
//           console.error(moveErr);
//           return res.status(500).json({ error: 'Internal Server Error' });
//         }
  
//         const user = 'INSERT INTO blogs (`title`, `description`, `tag`, `time`, `image`) VALUES (?,?,?,?,?)';
//         const values = [title, description, tag, time, newImagePath];
  
//         db.query(user, values, (dbErr, result) => {
//           if (dbErr) {
//             console.error(dbErr);
//             return res.status(500).json({ error: 'Internal Server Error' });
//           }
  
//           return res.json({ message: 'Blog created successfully' });
//         });
//       });
//     });
//   };
  

export const allBlog: RequestHandler = (req, res) => {
    db.query('SELECT * FROM blogs', (error, results) => {
        if (error) throw error;
        res.json(results);
      });
    
}

export const Updateblog: RequestHandler = (req, res) => {
    const {blogId} = req.params;

    const { title, description, tag, time } = req.body;

  db.query('UPDATE blogs SET title = ?, description = ?, tag = ?, time = ?  WHERE id = ?', [title, description, tag, time, blogId], (error, results) => {
    if (error) throw error;
    res.json({ blogId, title, description, tag, time });
  });

}

export const Deleteblog: RequestHandler = (req, res) => {
  const { blogId } = req.params;

  db.query('DELETE FROM blogs WHERE id = ?', [blogId], (error, results) => {
    if (error) throw error;
    res.json({ blogId, message: 'Blog deleted'});
 });

}

export const GetSingleBlog: RequestHandler = (req, res) => {
    const { blogId } = req.params;

    db.query('SELECT * FROM blogs WHERE id = ?', [blogId], (error, results) => {
      if (error) throw error;
      res.json(results);
   });
  
}