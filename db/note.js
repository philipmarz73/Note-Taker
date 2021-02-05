const { notEqual } = require("assert");
const fs = require ("fs");

const util = require ("util");

const {v4:uuidv4} = require ("uuid");

const readFileAsynch = util.promisify(fs.readFile);
const writeFileAsynch = util.promisify(fs.writeFile);


class Note {

    read(){
        return readFileAsynch("db/db.json","utf8")
    }

    write(note){
        return writeFileAsynch("db/db.json",JSON.stringify(note))
    }

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
