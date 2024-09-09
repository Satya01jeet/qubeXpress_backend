const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');
const controller = require('../controllers/controller')

router.use(bodyParser.urlencoded({extended: true}));
router.use(express.static(path.resolve((__dirname,'public'))));

var storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, "./public/uploads");
    },
    filename: (req,file,cb) => {
        cb(null, file.originalname);
    }
});

var upload = multer({ storage:storage });

router.post('/', upload.single('file'), controller.importData);

module.exports = router;