
const express = require('express');
const morgan = require('morgan');
const userRouter = require('./router')
const app = express();



app.use('/user',userRouter) 

//defining a dynamic route 
app.get('/products/:prodId',(req,res)=>{
   //console.log(req.params); //this will return the prod id object value which we have used in the browser for searching
    res.send('It\'s a specific product '+ req.params.prodId);
})

//Multiple route with route id can also be declared
app.get('/menu/:menuId/dishes/:dishId',(req,res)=> {
    console.log(req.params)
    
})



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
