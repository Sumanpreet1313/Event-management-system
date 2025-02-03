import mongoose from "mongoose"

export const dbConnection =()=>{
    mongoose.connect(process.env.MONGO_URI,{dbName:"MERN_STACK"}).then(()=>{
        console.log("Connected to databse");
    }).catch(err=>{
        console.log("Error: ", err);
    });
};
