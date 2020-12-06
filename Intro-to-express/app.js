const express = require('express');
const morgan = require('morgan');

const app = express();

function middleWare(req,res,next){
    if(req.url==='/contact'){
        res.send('<h2> Sorry! Contact page is blocked by the owner<h2>')
    }
    next();
}

app.use(middleWare);

app.get('/contact',(req,res)=>{
    res.send('<h1> Welcome to the contact page! </h1>')
})

app.get('/about',(req,res)=>{
   //res.send('<h1> Welcome to the about page </h1>')
   res.json({
       Name: 'Faisal',
       Age: '23',
       Birthdate: '12th july 1997'
   })
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
