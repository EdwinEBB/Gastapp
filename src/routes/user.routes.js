import Express from "express"
import { LoginUser, LogoutUser, registerUser } from "../controller/user.controller.js";

const useroutes=Express.Router();

useroutes.post('/users/register',registerUser);
useroutes.post('/users/login',LoginUser);
useroutes.post('/users/logout',LogoutUser);


export default useroutes;