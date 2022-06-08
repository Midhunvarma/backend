const express = require("express");
const app = express();

const  bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = port(5000);

app.post("/",(req,res)=>{
	res.send("successfully created")
})

app.get("/retrieve",(req,res)=>{
	res.send("successfully retrieved")
})

app.put("/update",(req,res)=>{
	res.send("successfully updated")
})

app.delete("/delete",(req,res)=>{
	res.send("successfully deleted")
})

app.listen(port,()=>{
	console.log("server is running on port + 5000")
})