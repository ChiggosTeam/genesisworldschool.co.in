import express from 'express';
import { Obj_BlogData } from '../modules/blog.mjs';
let homepage = express.Router();
homepage.get("/",async(req,res)=>{
    let returndata={};
    let blogdata=await Obj_BlogData.getallblogData();
    console.log(blogdata);
    returndata["blogdata"]=blogdata;
    res.render("homepage",{"returndata":returndata});
});

export{
    homepage
}