// const employee = {
//     name: 'Nikesh Kumar Jha',
//     address: 'Kathmandu',
//     phone: 9851191954
// };

// const strEmployee = JSON.stringify(employee);
// console.log(typeof strEmployee);
// console.log(strEmployee);


const fs = require('fs');
const originalNote = {
    title: 'Some title',
    body: 'Some body text'
};

const originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('./notes.json', originalNoteString);



const noteString = fs.readFileSync('notes.json');
const note = JSON.parse(noteString); // note object from  string read from notes.json file

//print the string version of note and a property from object
console.log(typeof note);
console.log(note.title);

