const express = require('express')

const morgan = require('morgan')

const contactRoutes = require('./contactRoutes')

app.use('/contacts',contactRoutes)

app.get('*',(req,res) => {
    res.send(<h1> Please use the correct Routes </h1>)
})

const app = express()

app.use(morgan('dev'))


const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})