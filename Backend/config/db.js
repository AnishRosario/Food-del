import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://anishresario:22334455@cluster0.vrzylgf.mongodb.net/food-del')
    .then(() => console.log("DB Connected"));
}