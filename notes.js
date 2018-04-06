console.log('starting notes.js');
const fs = require('fs');


const addNote = (title, body) => {
    //create a note object from title and body arguments
    const note = {
        title,
        body
    }
    const notes = readAllNotes();
    const duplicateNotes = notes.filter((note) => note.title === title); //check for duplicate note
    if (duplicateNotes.length === 0) {
        notes.push(note)
        saveNote(notes);
    } else {
        console.log('duplicate note !!');
    }

};


//Save notes to file
const saveNote = (notes) => {
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
}


const readAllNotes = () => {

    let notes = []
    try {
        let notesString = fs.readFileSync('notes-data.json')
        notes = JSON.parse(notesString);
        return notes;
    } catch (e) {
        console.log('Something wrong happened: ' + e);
        return [];
    }

}



/**
 * 
 * 
 * @returns all the notes [notes]
 */
const getAll = () => {
    console.log(':::notes:::');
    console.log(readAllNotes());
    return readAllNotes();
}



/**
 * 
 * 
 * @param {any} title 
 * @returns 
 */
const remove = (title) => {
    let allNotes = readAllNotes();
    console.log('\n All notes before deletion:');
    console.log(allNotes);
    let filteredNotes = allNotes.filter((note) => {
        return note.title != title;
    })
    console.log('\n After deletion:')
    console.log(filteredNotes);
    saveNote(filteredNotes);
    return filteredNotes;
}


/**
 * 
 * 
 * @param {any} title 
 * @returns note object
 */
const read = (title) => {
    console.log('reading note: ', title);
    const allNotes = getAll();
    const note = allNotes.filter((note) => {
        return note.title === title;
    })
    if (note.length == 1) {
        console.log('the retreived note is: ' + note[0].title + " " + note[0].body);
    } else {
        console.log('not found solti !!!');
    }

    return note;
}


module.exports = {
    addNote,
    getAll,
    read,
    remove
}

