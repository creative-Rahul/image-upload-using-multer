const express = require("express")
const multer = require("multer");
const fileupload = require("express-fileupload");

const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./images");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "--" + file.originalname)
    }
})

const upload = multer({ storage: fileStorageEngine })

// const upload = multer({ dest: 'uploads/' })
// app.post('/upload', upload.single('image'), function (req, res, next) {
//     // req.file is the `avatar` file
//     // req.body will hold the text fields, if there were any
//     console.log(req.file);
//     res.status(201).send("File uploaded sucessfully")
// })

app.use(fileupload())

app.post("/upload", upload.single('image'), (req, res) => {
    console.log(req.file);
    res.status(201).send("File uploaded sucessfully")
})



app.listen(port, () => {
    console.log("Server is started");
})

