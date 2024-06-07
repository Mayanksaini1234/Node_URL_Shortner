
import mongoose from "mongoose";

export const mongoDb = () => {
    mongoose.connect(process.env.MONGO_URL).then((c) => {
        console.log(`Connected to MongoDB `);
    }).catch((err)=>{
        console.log(err);
    })
}
