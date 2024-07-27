import mongoose from "mongoose";

export const dbConnection = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL,{dbName:"postApp"})
        .then((c)=>{
            console.log(`Database is connected on ${c.connection.host}`)
        });
        //console.log("Database Connected Succesfully");
    } catch (error) {
        console.log(error,"error in database connection");
    }
}
