import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone:String,
    touch:String,
    message:String,
    agreement:String,
    
  },
  { timestamps: true }
);

export default mongoose.model("Contact", ContactSchema);
