const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");

const server = express();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/litpix-studio");
  console.log("db connect");
}

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  subject: String,
  message: String,
});

const User = mongoose.model("User", userSchema);
server.use(cors());
server.use(bodyparser.json());

server.post("/litpix-studio", async (req, res) => {
  let user = new User();

  user.username = req.body.username;
  user.email = req.body.email;
  user.subject = req.body.subject;
  user.message = req.body.message;

  const document = user.save();
  console.log(document);
  res.json(document);
});
server.get("/litpix-studio", async (req, res) => {
  const docs = await User.find({});
  res.json(docs);
});

server.listen(8083, () => {
  console.log("server start");
});
