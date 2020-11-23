/* Every file can be said as a module . We can export anything from one module to another module
Variable,object,function etc.
*/

const add = (a,b) => {
    return a+b;
}

const sub = (a,b) => {
    return a-b;
}

const mul = (a,b) => {
    return a*b;
}

const result = (a,b) => {
    return add(a,b)/mul(a,b);
}

// we can export only a single function from this module like this

 //module.exports = result;

//we can export multiple functions from this module like this

// module.exports = {
//     result,
//     sub,
// }

//we can export single functions like this also.

exports.div = (a,b) => {
    return a/b;
} //this is preferred

//or this is preferred

module.exports.add = add; //this will export the previously declared add function


console.log(module);