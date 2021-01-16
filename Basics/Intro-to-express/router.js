const router = require('express').Router()

router.get('/login',(req,res)=> {
    res.send('This is a login page')
})

router.get('/logout',(req,res) => {
    res.send('This is a logout page')
})

router.get('/signup',(req,res) => {
    res.send('This is a signup page')
})

module.exports = router