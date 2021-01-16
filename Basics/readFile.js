const fs = require('fs')

fs.readFile('./info.json', (err,data) => {
    if(err) {
        console.log(err)
    }
    let read = JSON.parse(data); // we have to parse data with JSON else it can't be readable
    console.log(read);
})

