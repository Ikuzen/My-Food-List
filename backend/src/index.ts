// var express = require('express');
import  express = require("express");
var bodyParser = require('body-parser');

const app = express();
const PORT = 3000;


const usersRouter = require('./routes/users.ts');

app.use(bodyParser.json());

app.use('/users', usersRouter);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
