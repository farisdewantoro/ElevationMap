import { Router,Request,Response } from 'express';
import {userController} from '../controllers'
const router = Router();

router.get("/",(req:Request,res:Response)=>{
    return userController.execute(req,res).getUsers()
})

router.post("/",(req:Request,res:Response)=>{
    return userController.execute(req,res).create()
})



export default router