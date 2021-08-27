const fs = require('fs');
const chalk = require('chalk')



// add note function
const addNote = function(title, body){
    const notes = loadNote()
    const duplicateNotes= notes.filter(function (note){
        return note.title===title
    })
    notes["t"]
    if(duplicateNotes == 0){
        notes.push({
            'title': title,
            'body': body
        })
        
        saveNote(notes)
        console.log(chalk.green("New note added!"))
        
    }else{
        console.log(chalk.red("Notes title taken!"))
    }
}


// Remove Note function
const removeNote = function(title){
    const notes = loadNote()
    const index = notes.findIndex(x => x.title === title);
    if(notes.length>0){
        if(index>=0){
            notes.splice(index, 1);
            saveNote(notes)
            console.log(chalk.bgGreen("Successfully! Removed."))
        } else{
            console.log(chalk.bgRed(" Error! No note found. "));
        }
    }
    else{
        console.log(chalk.bgRed("Notes list are empty."));
        
    }
}


// list function
const listNote = function() {
    const notes = loadNote()
    notes.forEach(listEachElement)
}
function listEachElement(item,index){
    console.log(index+1 + ": " + item.title)
}


//read note function

const readNote = function(title){
    const notes = loadNote()
    const index = notes.findIndex(x => x.title === title);
    if(notes.length>0){
        if(index>=0){
            console.log(chalk.bgRed.blue(' ' +chalk.italic(notes[index].title) + ' '))
            console.log(chalk.bgYellow.black(' ' + notes[index].body + ' '))
        } else{
            console.log(chalk.bgRed(" Error! No note found. "));
        }
    }
    else{
        console.log(chalk.bgRed("Notes list are empty."));
        
    }
}


// load Note function
const loadNote = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}


// saving function
const saveNote = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    addNote: addNote,
    listNote: listNote,
    readNote: readNote,
    removeNote: removeNote
}
