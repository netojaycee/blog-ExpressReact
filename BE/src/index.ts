import  express from "express"
import authRouter from './routers/auth'
import blogRouter from './routers/blog'
import mysql from 'mysql'
import cors from 'cors'


const app = express();
app.use(cors());
app.use(express.json())
app.use("/auth", authRouter);
app.use("/blog", blogRouter);


import "dotenv/config";


export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mhapy',
});

function createTable(){
    db.query(`CREATE TABLE IF NOT EXISTS users(
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        username VARCHAR(100),
        password VARCHAR(100),
        token VARCHAR(255)
    )`, (err:any) =>{
        if(err) throw new Error(err);
        console.log("Table created/exists");
    } 
    );
}

createTable();

function createAnotherTable() {
  db.query(`CREATE TABLE IF NOT EXISTS blogs(
      id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
      title VARCHAR(100),
      description VARCHAR(100),
      tag VARCHAR(100), 
      image VARCHAR(255),
      time INT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`, (err) =>{
      if(err) throw new Error(err);
      console.log("blog Table created/exist");
  }
  );
}

createAnotherTable();
 

const PORT = 7979

app.listen(PORT, () =>{
    console.log('port is listening on port '+ PORT)
}); 