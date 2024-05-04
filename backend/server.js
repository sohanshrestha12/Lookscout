import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

import express from "express";
import cors from "cors";
const app = express();
import Contact from "./model/ContactModel.js"
app.use(cors());
app.use(express.json());


// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;
app.get("/",(req,res)=>{
    res.send("this is working.");
})
app.post("/contact",async(req,res)=>{
    try {
        console.log(req.body);
        const details = await Contact.create(req.body);
        res.status(201).json(details);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
} )

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

try {
  // eslint-disable-next-line no-undef
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
} catch (error) {
  console.log(error);
  // eslint-disable-next-line no-undef
  process.exit(1);
}