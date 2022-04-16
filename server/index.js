require("./Model/index.js")
const express = require("express");
const cors= require("cors");
const app = express();
const impController=require("./Controller/impController")

app.use(cors())
app.use(express.json())
app.use("/impevents", impController);
app.listen(5000, () =>{
    console.log('Server is Running..');
});