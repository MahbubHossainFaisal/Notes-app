
const express = require('express');
const morgan = require('morgan');
const userRouter = require('./router')
const app = express();



app.use('/user',userRouter) 


// The root router must be declared in the 2nd last always 
app.get('/',(req,res)=>{
    res.send('<h1> Welcome to the site! </h1>')
})

//Any route that has not been declare
app.get('*',(req,res)=>{
    res.send('<h1> 404 Not Found! </h1>')
})

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=> {

    console.log(`Server is running on port ${PORT}`);
})
