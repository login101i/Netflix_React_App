const express = require("express");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log("Mongo DB connected sucessfully".brightCyan);
}).catch((err)=>console.log(err));

app.listen(8880, () => {
  console.log("Serwer is running on port 8880".brightMagenta);
});
