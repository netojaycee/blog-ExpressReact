import { RequestHandler } from "express";
import { db } from '../index'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"



interface body {
    username: string,
    password: string,
}
export interface User {
    id: number; 
    username: string;
    tokens: string;  }
  



export const createUser: RequestHandler = async (req, res) => {
    const { username, password } = req.body;
  
    // Hash the password using bcrypt
    
  
      const user = 'INSERT INTO users (`username`, `password`) VALUES (?, ?)';
      const values = [username, password]; // Use the hashed password
  
      db.query(user, values, (dbErr, result) => {
        if (dbErr) { 
          console.error(dbErr);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
        return res.json({ message: 'User created successfully', values });
      });
    
  };
  

export const loginUser: RequestHandler = async(req, res) => {
    const { username, password } = req.body;
    const checkUser = 'SELECT * FROM users WHERE username = ? AND password = ?';
    const hashedPassword = bcrypt.compare(password, checkUser)
    const values = [username, password];
  
    db.query(checkUser, values, (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' }); 
      }
  
      if (results.length === 0) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }
      const user : User = results[0];
  
      // User exists and password matches
      const secret = "mhapyblog"
      const token = jwt.sign({ userId: user.id }, secret);

      db.query('UPDATE users SET token = ? WHERE id = ?', [token, user.id], (error, results) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
      
        console.log(token);
      
        // Assuming the update was successful, you can send the token in the response
        res.json({ token });
      });
      
        
      return res.json({ message: 'Login successful'});
    });
  };


export const logoutUser: RequestHandler = async (req, res) => {
    const userId = req.user.id; // Assuming you have a middleware that sets `req.user`
    const updateTokenQuery = 'UPDATE users SET token = NULL WHERE id = ?';
  
    db.query(updateTokenQuery, [userId], (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      res.json({ message: 'Logout successful' });
    });
  };
  


 