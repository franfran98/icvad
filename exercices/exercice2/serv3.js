const express = require('express')
const app = express()
const port = 8080
const axios = require('axios');

let s1;
let s2;

app.post('/s1', (res, req)=>{
    s1 = req.serv1;
    console.log("s1 = ",s1)
})

app.post('/s2', (res, req)=>{
    s2 = req.serv2;
    console.log("s2 = ",s2)
})

app.get('/s1', (req,res)=>{
    if(s1 =="" || s1==undefined || s1==null){
        res.status(200).json({
            message :"n/a",
        })
    }
    else{
        res.status(200).json({
            message :s1,
        })
    }
})

app.get('/s2', (req,res)=>{
    if(s1 =="" || s1==undefined || s1==null){
        res.status(200).json({
            message :"n/a",
        })
    }
    else{
        res.status(200).json({
            message :s2,
        })
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    
})


