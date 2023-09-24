import express from 'express';
let admininsertionpage = express.Router();
import { Obj_BlogData } from '../modules/blog.mjs';
import { obj_Image } from '../modules/Image/saveimage.mjs';
admininsertionpage.get("/admininsertionpage",async(req,res)=>{
    try{
        let userid=atob(req.url.split("?")[1].split("+")[0].replace("Id=",""));
        let password=atob( req.url.split("?")[1].split("+")[1].replace("p=",""));
        let checkUser=await Obj_BlogData.checkUser(userid,password);
        if(checkUser.length>0){
            res.render("admininsertionpage")
        }
        else{
            res.render("notavaliduser");
        }
    }
    catch(e){
        res.render("notavaliduser");
    }
});
admininsertionpage.post("/admininsertionpage",async(req,res)=>{
    let data=JSON.parse( req.body.datalist)
    let imagedata = data["image"];
    let base64 = imagedata;
    let Id = data["Id"];
    let path = obj_Image.WriteFile(base64, Id);
    data["image"] = path;
    let status=Obj_BlogData.saveBlogData(data);
    res.send({"status":status});
});
export{
    admininsertionpage
}