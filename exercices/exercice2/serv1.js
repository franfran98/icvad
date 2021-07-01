const express = require('express')
const app = express()
const port = 4567
const axios = require('axios');

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'pong',
  })
  setTimeout(function(){
    axios.get('http://localhost:5372/message')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  },1000)

  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  axios.get('http://localhost:5372')
    .then(response => {
      console.log(response.data);
      
    })
    .catch(error => {
      console.log(error);
    });
})