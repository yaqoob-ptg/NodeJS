// console.log('Hello, World!');

import express from "express";

const app = express();

app.use(express.json());

const port = 3000;

app.get('/',(req,res)=>{
    const date =new Date();
    const day=date.getDate();
    const month=date.getMonth()+1;
    const year=date.getFullYear();
    const hours=date.getHours();
    const minutes=date.getMinutes();
    const seconds=date.getSeconds();

    res.send(`Today's date is ${day}-${month}-${year} and the current time is ${hours}:${minutes}:${seconds}`);
})

let users=[
    {id:1,name:'Alice'},
    {id:2,name:'Bob'},
    {id:3,name:'Charlie'}
]

app.get('/users',(req,res)=>{
    res.send(users);
})


app.post('/users',(req,res)=>{
    const {name,id} =req.body;
    console.log(req.body)

// const date = new Date.now().toString(36);
    users.push({...req.body,id: Date.now()});
        res.send({message: `user added successfully ${name} `});


})

app.put('users/:id',(req,res)=>{
    const {id}=req.params;
    const {name,email}=req.body;
    const userIndex=users.findIndex(user=>user.id===parseInt(id));
    if(userIndex===-1){
        res.status(404).send({message:"User not found"});
    }else{
        users[userIndex]={...users[userIndex],name,email};
        res.send({message:"User updated successfully",user:users[userIndex]});
    }
})

app.delete('/users/:id',(req,res)=>{
    const {id} =req.params;
    // const userIndex=users.findIndex(user=>user.id===parseInt(id));


    // if(userIndex===-1){
    //     res.status(404).send({message:"User not found"});
    // }else{
    //     users.splice(userIndex,1);
    //     res.send({message:"User deleted successfully"});
    // }

    users=users.filter(user=>user.id!==parseInt(id));
    res.send({message:"User deleted successfully",users});

})
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})