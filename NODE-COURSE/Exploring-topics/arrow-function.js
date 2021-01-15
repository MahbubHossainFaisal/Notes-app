//ES5

const square = function (x) {
    return x*x
}

//ES6

const squareArrow = (x) => {
    return x*x
}

//ES6 another way

const sqArrow = (x) => x*x //this only can be used if the function return just one value immediately

console.log(square(3))
console.log(squareArrow(3))
console.log(sqArrow(3))


//In terms of object

const event = {
    name: 'Birthday - party',
    numOfGuest: function () {
        console.log('List of guest for the '+ this.name)
    }
}

event.numOfGuest() // This will work

// using ES6

const Event = {
    name: 'Birthday - party',
    numOfGuest:  () => {
        console.log('List of guest for the '+ this.name)
    }
}

Event.numOfGuest() // It will show undefined means 'this' method of es6 can get values under it's own scope.

//We can use a more consize syntex in terms of object 

const EVENT = {
    name: 'Birthday - party',
    numOfGuest () {
        console.log('List of guest for the '+ this.name)
    }
}

EVENT.numOfGuest() // this will work

const mainEvent = {
    name: 'Birthday - party',
    guestList: ['Asif','Faisal','Raihan'],
    numOfGuest () {
        console.log('List of guest for the '+ this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' +this.name)
        })
    }
}

mainEvent.numOfGuest()


