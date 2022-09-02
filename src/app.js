const express = require("express")
const multer = require("multer")


const app = express()


// const upload = multer({ dest: './uploads/' })
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + "--" + file.originalname)
    }
})

const upload = multer({ storage: storage })

app.post("/single", upload.single("image"), (req, res) => {
    console.log(req.file);
    res.status(201).send("Upload Successful")
})


app.listen(3000, () => {
    console.log("Server started");
})