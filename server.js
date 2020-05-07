//Dependencies
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const apiRouting = require("./routes/apiRouting");
const cors = require('cors')
require("dotenv").config();
//Express server
const app = express();
const PORT = process.env.PORT || 3001;
//Middleware
app.use(morgan("short"));
app.use(cors())
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
mongoose.connect(process.env.MONGODB_URI || "mongodb://tylerphopho:password1@ds125578.mlab.com:25578/heroku_pdnwd75r",
{
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
},
() => console.log("Connected to MongoDB!")
);
app.use("/", apiRouting);
//Starts the server
app.listen(PORT, () =>{
    console.log(`Currently listening to http://localhost:${PORT}`)
});


