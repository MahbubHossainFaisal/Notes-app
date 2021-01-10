const express = require('express')

const morgan = require('morgan')



const app = express()

app.set('view engine', 'ejs')


app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.get('/',(req,res) => {
    let post = {
        Title: 'Demo-Title',
        Body: 'Demo-body',
        Published: true
    }
    res.render('index', {title: 'EJS - IS AWESOME TEMPLATE ENGINE',post})
})


const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

