const express = require('express');
const morgan = require('morgan');

const app = express();


//express user router
const router = express.Router()

router.get('/login',(req,res)=> {
    res.send('This is a login page')
})

router.get('/logout',(req,res) => {
    res.send('This is a logout page')
})

router.get('/signup',(req,res) => {
    res.send('This is a signup page')
})

app.use('/user',router) //this user path with will have no physical existance but will be the mother route of all the sub routes above

//User router end
////////////////////
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
