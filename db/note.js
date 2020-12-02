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
}

module.exports = new Note();
