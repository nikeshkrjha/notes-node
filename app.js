console.log('Starting App');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');



//do the actual work
let argv = yargs.argv;
// let command = process.argv[2]; // get the 3rd argument passed in the command line, argv is array of command
let command = argv._[0]; //access the command using yargv 
console.log('You Entered Command: ', command);
console.log('Yargs args: ', yargs.argv);



if (command === 'add'){
    notes.addNote(argv.title, argv.body);
}else if (command === 'list'){
    notes.getAll();
}else if (command === 'read'){
    notes.read(argv.title);
}else if (command === 'remove'){
    notes.remove(argv.title);
}