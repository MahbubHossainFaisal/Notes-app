const fs = require('fs')

const obj = {
    name: 'Mahbub Hossain',
    age: 23,
    DOB: '12/07/1997',
    address : {
        current: 'Bashundhara',
        permanent: 'Narayanganj'
    },
    occupation: 'Student',
    goal: 'To be a software engineer'
}

const des = JSON.stringify(obj);

fs.writeFile('info.json',des, (err) =>{
    if(err) {
        console.log(err);
    }
    else {
        console.log('Successful!')
    }
})

