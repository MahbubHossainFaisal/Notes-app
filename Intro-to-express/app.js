const express = require('express');

const app = express();
app.get('/',(req,res)=>{
    res.send('<h1> Welcome to the site! </h1>')
})
const PORT = process.env.PORT || 8080;

app.listen(PORT,()=> {

    console.log(`Server is running on port ${PORT}`);
})
