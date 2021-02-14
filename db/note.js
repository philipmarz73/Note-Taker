//create note.js file to add notes, retrieve notes, or remove notes from JSON

// adding required files from npm packages

const { notEqual } = require("assert");
const fs = require ("fs");

const util = require ("util");

const {v4:uuidv4} = require ("uuid");
// file for auto-generated id

const readFileAsynch = util.promisify(fs.readFile);
const writeFileAsynch = util.promisify(fs.writeFile);

// creates basic functionality for your input notes,
// read, write, return, add, remove
class Note {

    read(){
        return readFileAsynch("db/db.json","utf8")
    }

    write(note){
        return writeFileAsynch("db/db.json",JSON.stringify(note))
    }
// check notes for error, if error-free, return output
    getNotes(){
        return this.read().then(notes => {
            let parseNotes;
            try {
              parseNotes = [].concat(JSON.parse(notes))  
            } catch (error) {
               parseNotes = [] 
            }
            console.log(parseNotes);
            return parseNotes;
        })
    }
    // update notes if new id generated, showing new notes
    addNote(note){
        const {title, text} = note;
        const newNote = {title, text, id:uuidv4()};
        return this.getNotes()
        .then(notes => [...notes,newNote])
        .then(updateNotes => this.write(updateNotes))
        .then(()=> newNote)
    }
    removeNote(id){
        return this.getNotes()
        .then(notes => notes.filter(note => note.id !== id))
        .then(updateNotes => this.write(updateNotes))
    }
}

module.exports = new Note();
