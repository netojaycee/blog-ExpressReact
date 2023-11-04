import { User } from '#/controller/user';
import { Request } from 'express';


declare module 'express' {
  interface Request {
    user: User; // Replace 'User' with your user type
  }
}
