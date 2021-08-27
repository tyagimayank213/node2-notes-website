const yargs = require("yargs");
const note = require("./note.js");
// const clark = require("clark");
const notes = require('./note.js');


// add notes command
yargs.command({
    command:"add",
    describe:"Add a note",
    builder: {
        title:{
            describe: 'Notes title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Notes body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title,argv.body);
        console.log(argv.title)

    }
})

// create remove commmand
yargs.command({
    command:"remove",
    describe:"Remove a note",
    builder: {
        title:{
            describe: 'Notes title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})

// create list commmand
yargs.command({
    command:"list",
    describe:"List out all notes",
    handler: function(){
        console.log("Notes list are...")
        notes.getNotes();
    }
})

// create read commmand
yargs.command({
    command:"read",
    describe:"Read a note",
    builder: {
        title:{
            describe: 'Notes title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.readNote(argv.title);
    }
})

yargs.parse();