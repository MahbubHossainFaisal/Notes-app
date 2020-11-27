//We will create a server here

const http  = require('http')

const server = http.createServer((req,res) => {
    console.log(req.url)
    res.end('<H1>Hello welcome to the server you have created through NODEJS!')
})


server.listen(3111,()=> {
    console.log('Server is running!')
})