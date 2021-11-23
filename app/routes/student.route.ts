import { Router } from 'express';
import studentController from '../controllers/student.controller';
const router = Router();

router.get("/api/tes",(req,res,next)=>{
    return studentController.getStudents().then(v=>{
        res.json(v)
    })
})


router.get("/api/tes2",(req,res,next)=>{
    return res.json(
        {
            name:"aw ASfD"
        }
    )
})


export default router