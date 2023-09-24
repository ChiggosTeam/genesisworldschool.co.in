import express from 'express';
import { Obj_BlogData } from '../modules/blog.mjs';
let loginscreen = express.Router();
loginscreen.get("/loginscreen",(req,res)=>{
    res.render("loginscreen")
});
loginscreen.post("/loginscreen", async (req, res) => {
    let userid = req.body.userid;
    let password=req.body.password;
    let checkUser=await Obj_BlogData.checkUser(userid,password);
    res.send({ "status": checkUser });
});
export{
    loginscreen
}