const express = require("express");
const mongoose = require("mongoose");
const app = express();
const postRouter = require("./router/postRouter.js");
const cors = require("cors");

require("dotenv").config();
app.use(cors());
app.use(express.json());
mongoose.set("strictQuery", true);

const mongoDB_url = process.env.DBURL;
const port = process.env.PORT || 8080;

const connect = () => {
  mongoose.connect(mongoDB_url);
  try {
    console.log("DB CONNECTED SUCCESSFULLY");
  } catch (err) {
    console.log(err);
  }
};

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/tasks", postRouter);

app.listen(port, () => {
  connect();
  console.log(`app running on port ${port}`);
});
