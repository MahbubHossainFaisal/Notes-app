const chalk = require('chalk')
const fs = require('fs')

const getNotes = function() {
    return "this a test....."
}
const addNote = function(title,body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })

    if(duplicateNotes.length === 0){

     notes.push({
        title: title,
        body: body
        })

        saveNotes(notes)

        console.log(chalk.green('New note has been added'))

    } else {
        console.log(chalk.yellow('Note title already taken'))
    }

   
}

const removeNote= function(title) {
   const notes = loadNotes()

   const notesToKeep = notes.filter(function(note) {
       return note.title !== title
    })

    saveNotes(notesToKeep)
    if(notes.length === notesToKeep.length) {
        console.log (chalk.blue('No notes found to remove!!!'))
    }
    if(notes.length > notesToKeep.length) {
        console.log(chalk.red.inverse('Notes has been removed !!!'))
    }

}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote: removeNote
}