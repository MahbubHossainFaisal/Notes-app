// importing path module object and storing in a variable

const path = require('path');

const myPath = __filename;

console.log(path.basename(myPath)); //using this basename method, this will show only the folder name of my current file is in.

console.log(path.extname(myPath));//this will print the extension name of the current file that i m using


const pathObject = {
    dir: 'user\local',
    name: 'test',
    ext: '.js',
}

// Now we can make this object formatted as a path like string

console.log(path.format(pathObject));


//isAbsolute module

console.log(path.isAbsolute(myPath)); // True
console.log(path.isAbsolute('./math.js')); //false

// join module will joining different string and making it as a path

const joinPath = path.join('user','local','test','text.js');

console.log(joinPath);

// resolve module can add more string with an absolute path and make a new path

console.log(path.resolve(__dirname,'faisal','test','flex.js'));


//format module makes an object a path and parse module makes a path an object
console.log(path.parse(myPath));