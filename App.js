import dotenv from "dotenv";
import express from "express";
import connectDb from "./config/connectdb.js";
// import userRoutes from "./route/userRoute.js";
// import courseRoutes from "./route/courseRoute.js";
// import categoryRoutes from "./route/categoryRoute.js"

dotenv.config();
connectDb();

const app = express();

app.use(express.json());
const port = process.env.PORT;
console.log("hello")

// app.use("/api/user", userRoutes);
// app.use("/api/course", courseRoutes);
// app.use("/api/category", categoryRoutes);


app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Server is running ${port}`);
});
