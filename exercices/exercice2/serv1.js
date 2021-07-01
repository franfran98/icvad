const express = require('express');
const app = express();
const port = 4567;
const axios = require('axios');
let s2;
const s3 = "http://localhost:8080";

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'pong',
  })
  setTimeout(function(){
    axios.get(s2+"/message")
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

  axios.post(s3+"/s1", {serv1 : `http://localhost:${port}`}).then(response =>
  {});

  while(s2 == "" || s2 == undefined || s2==null){
    setTimeout(function() {
      axios.get(s3+"/s2").then(response => {
        console.log(response.data);
        if(message!=undefines && message!=null && message!='n/a'){
          s2 = response.data.message;
        }
      })
    })
  }
  
  axios.get(s2)
    .then(response => {
      console.log(response.data);
      
      
    })
    .catch(error => {
      console.log(error);
    });
})