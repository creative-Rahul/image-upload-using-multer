const express = require("express")

const app = express()

const upload =require("./middleware/upload")



app.post("/single", upload.single("singleImage"), (req, res) => {
    console.log(req.file);
    res.status(201).send("Upload Successful")
})


app.listen(3000, () => {
    console.log("Server started");
})