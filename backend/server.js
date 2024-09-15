import express from "express";
import { connectDB } from "./config/db.js";
import path from "path";
import ProductsRoute from "./routes/product.route.js";

const app = express();
const __dirname = path.resolve();

app.use(express.json());
app.use("/api/", ProductsRoute);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "fronted", "dist", "index.html"));
  });
}
app.listen(3000, () => {
  connectDB();
  console.log("server started at http://localhost:3000 ");
}); //n2QIgQchOwDEKStA
