import express  from "express";
import mongoose from './db.js'
import cors from "cors";
import postRoutes from './routes/posts.js'

const app = express();

const port =  5000;
app.use(express.json());
app.use(cors({ origin: "http://localhost:4200" }));

app.use("/posts", postRoutes);

app.listen(port, () => {
    console.log(`server is running on port : ${port}`);
});