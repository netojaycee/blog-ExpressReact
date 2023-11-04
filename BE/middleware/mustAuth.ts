import { RequestHandler } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { db } from '../src/index'
import { User } from '#/controller/user';


export const mustAuth: RequestHandler = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) { 
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const secret = "mhapyblog"; // Same secret used for token generation
    const decoded = jwt.verify(token, secret) as JwtPayload;

    // Fetch user data from the database based on the decoded user ID
    const id = decoded.userId;
    console.log(id)

    const userQuery = 'SELECT * FROM users WHERE id = ?';
    db.query(userQuery, [id], (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      if (results.length === 0) {
        return res.status(401).json({ error: 'User not found' });
      }


      // Set the user data in `req.user`
      req.user = results[0] 

      // Continue with the next middleware or route handler
      next();
    });
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
};
