var express = require('express');
var router = express.Router();

router.get('/', async (request, response) => {
  try {
    console.log('get users');
    response.send('welcome users');
  } catch(error) {
    response.status(500).send('error');
  }
})

module.exports = router;