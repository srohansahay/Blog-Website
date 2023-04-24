import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";

mongoose.connect('mongodb+srv://admin:1eWe86R8vgghXuiC@cluster1.mc8nsgd.mongodb.net/?retryWrites=true&w=majority').then(()=>app.listen(5000)).then(()=>console.log("Connected to database and listening to localhost 5000")).catch((err)=> console.log(err));

const app = express();
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);

/*app.use("/api",(req,res,next)=>{
 res.send("Hello World");
});*/



//1eWe86R8vgghXuiC

