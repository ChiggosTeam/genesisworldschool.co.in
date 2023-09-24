import { db } from "./Database/connection.mjs";
class BlogData {
    constructor() { 
    //    this.writeUser(3824,1234);
    }
    async checkUser(userid,password) {
        userid= parseInt(userid);
        password=parseInt(password);
        console.log(userid);
        try {
            return await db.collection("admin").find({ $and: [{ 'userid': userid }, { 'password': password }] }).limit(1).toArray();
        }
        catch (e) {
            return e.emessage
        }
    }
    // async writeUser(userid,password) {
    //     try {
    //         let abc= await db.collection("admin").insertOne({ 'userid': userid }, { 'password': password });
    //         console.log(abc);
    //     }
    //     catch (e) {
    //         return e.emessage
    //     }
    // }
    async saveBlogData(data){
        try {
            let saveResponse = await db.collection("blogdata").insertOne(data);
            console.log(saveResponse)
            if (saveResponse.insertedCount > 0) {
                return "saved"
            } else {
                return "something went wrong"
            }
        }
        catch (error) {
            return error.message
        }
    }
    
    async getallblogData() {
        try {
            return await db.collection("blogdata").find().sort({ "_id": -1 }).toArray();
        } catch (e) {
            return e.message
        }
    }
    
}
var Obj_BlogData = new BlogData();
export {
    Obj_BlogData
}