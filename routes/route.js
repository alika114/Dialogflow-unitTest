const express = require('express');
const postContoller = require('../controllers/dialogflowControl');
const dialogflow = require('dialogflow');
const uuid = require('uuid');


const router = express.Router();

router.get("/", postContoller.getPosts);
router.post("/", postContoller.createPost);
router.post('/test', postContoller.test);

module.exports = router;