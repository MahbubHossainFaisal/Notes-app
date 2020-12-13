const os = require('os'); //importing os module

console.log(os.arch()); //this will print the operating system architecture which is 64 bit for my case

console.log(os.cpus()); //this will provide the cpu info

console.log(os.freemem()); //How much memory is free info

console.log(os.networkInterfaces()); //will show network informations as objects

console.log(os.hostname());

console.log(os.homedir());

console.log(os.type());

console.log(os.userInfo());