console.log('starting notes.js');
const fs = require('fs');


const addNote = (title, body) => {
    const note = {
        title,
        body
    }
    let notes = []
    let notesString = fs.readFileSync('notes-data.json')
    notes = JSON.parse(notesString);
    notes.push(note)
    fs.writeFileSync("notes-data.json",JSON.stringify(notes));
};

const getAll = () => {
    console.log('getting all notes');
}

const remove = (title) =>{
    console.log('removing note: ', title);
}

const read = (title) =>{
    console.log('reading note: ', title);
}

module.exports = {
    addNote,
    getAll,
    read,
    remove
}

