import mongoose from "mongoose";
let db=null;
try{
    let connect = await mongoose.connect("mongodb://127.0.0.1:27017/bloggingproject");
    if (connect.connections[0]._hasOpened==true){
        db=mongoose.connection.db;
    }
    else{
        alert("Database Connectivity is not true");
    }
}
catch(e){
    alert(e.message);
}
export{
    db
}