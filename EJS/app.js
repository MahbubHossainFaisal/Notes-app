const express = require('express')

const morgan = require('morgan')



const app = express()

app.set('view engine', 'ejs')


app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.get('/about', (req,res) => {
    res.render('pages/about')
})
app.get('/help', (req,res) => {
    res.render('pages/help')
})

app.get('/',(req,res) => {
    let post = {
        Title: 'Demo-Title',
        Body: 'Demo-body',
        Published: true
    }
    let books = [
        {title: 'Introduction to C', author: 'Mahbub Hossain'},
        {title: 'Introduction to C++', author: 'Monwar Hossain' },
        {title: 'Introduction to Java', author: 'Anwar Hossain'}
    ]
    res.render('pages/index', {title: 'EJS - IS AWESOME TEMPLATE ENGINE',post,books})
})


const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

