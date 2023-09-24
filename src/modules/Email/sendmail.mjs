import mongoose from "mongoose";
import {google} from "googleapis";
import nodemailer from "nodemailer";
class Email {
    constructor() { 
    }
  async  sendMail(messageInfo){
        try{
            const transport=nodemailer.createTransport({
              service:"Gmail",
              auth:{
                user:"noreply.chiggos@gmail.com",
                pass:"ltdexvksjhcjwcwt",

                
              }
            })
            const mailoption={
              from:"noreply.chiggos@gmail.com",
              to:"raasu.raas@gmail.com",
              subject:messageInfo.name+messageInfo.email,
              html:`<h1> ${messageInfo.message} </h1>`
            }
            const result=await transport.sendMail(mailoption);
            return "send";
        }
        catch(e){
            console.log(e.message);
            return "Not Valid Grant"
        }
    }
}
var Obj_Email = new Email();
export {
    Obj_Email
}