require("dotenv").config()
const express = require("express")
const app = express()

app.get("/",(req,res) => {
    res.send("Hello World")
})

app.get("/testing",(req,res) => {
    res.send("checking 1")
})




const PORT = process.env.PORT || 5001

app.listen(PORT, console.log(`port running on port number ${PORT}`))