const express = require('express');
const router = express();
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));
