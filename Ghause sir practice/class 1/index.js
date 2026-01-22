// console.log('Hello, World!');

import express from "express";

const app = express();

const port = 3000;

app.get('/',(req,res)=>{
    res.send('Hello, World!');
})

app.get('/users',(req,res)=>{
    res.send({
        name: "John Doe",
        age: 32,

    })
})

app.post('/data',(req,res)=>{
    res.send('Data received via POST request');
})
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})