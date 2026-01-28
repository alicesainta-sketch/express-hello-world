const express=require('express');
const app=express();
const post = require('./routes');
const port=3000;

app.use(express.json());

routes(app);

app.use('/posts',post);

app.get('/',(req,res)=>{
    res.send('Hello, World!');
});

app.post('/',(req,res)=>{
    console.log("Received data:",req.body);
    res.status(201).send('Data received');
});

app.put('/:id',(req,res)=>{
    console.log('收到的ID:',req.params.id);
    console.log("收到的数据:",req.body);
    res.send();
}); 

app.delete('/:id',(req,res)=>{
    console.log('收到的ID:',req.params.id);
    res.status(201).send(); 
}); 

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
