import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://anushkaranjan35:8769289409@cluster0.s7m8s.mongodb.net/food-del').then(()=> console.log("DB Connected")) ;
}