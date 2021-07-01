const express = require('express')
const app = express()
const port = 5372
const axios = require('axios');
let s1;
const s3 = "http://localhost:8080";

app.get('/message', (req,res)=>{
    res.status(200).json({
        status: 200,
        message: 'ping',
      })
})

app.get('/', (req, res) => {

    res.status(200).json({
        status: 200,
        message: 'ping',
      })

      while(s1 == "" || s1 == undefined || s1==null){
        setTimeout(function(){
          axios.get(s1)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
        }, 1000);

      }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)

  axios.post(s3+"/s2",{serv2 :`http://localhost:${port}`})

  while(s1 == "" || s1 == undefined || s1==null){
    setTimeout(function(){
      axios.get(s3+"/s1")
      .then(response => {
        if(message!=undefines && message!=null && message!='n/a'){
          s1= response.data.message;
        }
      })
      .catch(error => {
        console.log(error);
      });
    }, 1000);
  }

})