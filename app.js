const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dialogflow = require('dialogflow');

//Routes file
const postRoutes = require('./routes/route');

//middleware 
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use('/', postRoutes);
app.use('/test', postRoutes)

const port = 8080;
app.listen(port, () => {
    console.log(`A node JS API is listening in the port :${port}`);
});