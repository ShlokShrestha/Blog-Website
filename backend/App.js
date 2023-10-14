const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const cookieParser = require("cookie-parser");
var cors = require("cors");
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/mernproject");
  console.log("Database Connected");
}
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/product", productRouter);
app.use("/", userRouter);

app.listen(8000, () => {
  console.log("Server is running on 8000 port");
});
