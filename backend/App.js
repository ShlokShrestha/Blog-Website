const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRouter = require("./routes/product");
var cors = require("cors");
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/mernproject");
  console.log("Database Connected");
}
app.use(cors());
app.use(express.json());

app.use("/product", productRouter);

app.listen(8000, () => {
  console.log("Server is running on 8000 port");
});
