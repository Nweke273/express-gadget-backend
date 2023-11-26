const cors = require('express-cors');
const express = require("express");
const app = express();

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const port = 3000;
const productRouter = require("./routes/product");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected succesfully"))
  .catch((error) => console.log(error));



app.get("/", (req, res) => res.send("Hello World!"));

//make our app process json data using json parser fromexpress
app.use(cors({ origin: '*' }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

//create endpoints

app.use("/api/products", productRouter);
app.listen(process.env.PORT || port, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
