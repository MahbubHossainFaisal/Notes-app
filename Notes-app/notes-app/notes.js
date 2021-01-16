const chalk = require('chalk')
const fs = require('fs')
const { title } = require('process')

const getNotes = () => {
    return "this a test....."
}
const addNote = (title,body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.find((note) => note.title === title)

    if(!duplicateNotes){

     notes.push({
        title: title,
        body: body
        })

        saveNotes(notes)

        console.log(chalk.green.inverse('New note has been added'))

    } else {
        console.log(chalk.red.inverse('Note title already taken'))
    }

   
}

const removeNote= (title) => {
   const notes = loadNotes()

   const notesToKeep = notes.filter((note) => note.title !== title )
    

    saveNotes(notesToKeep)
    if(notes.length === notesToKeep.length) {
        console.log (chalk.yellow.inverse('No notes found to remove!!!'))
    }
    if(notes.length > notesToKeep.length) {
        console.log(chalk.red.inverse('Notes has been removed !!!'))
    }

}

const listNotes = () => {
    

    const notes = loadNotes()
    console.log(chalk.red.blue.inverse('Your Notes'))
    
   

   if(notes.length>0) {

        notes.forEach((note) => {
        console.log(chalk.white.inverse(note.title))
    })
   } else {
       console.log(chalk.yellow.inverse('Sorry! There is no notes to show'))
   }
}


const readNote = (title) => {
    const notes = loadNotes()
    const particularNote = notes.find((note) => note.title === title)
    if(particularNote){
        console.log('Title: ' + chalk.green.inverse(particularNote.title))
        console.log('Body: '+ chalk.white.inverse( particularNote.body))
    } else {
        console.log(chalk.red.inverse('Sorry! There is no such note!!!'))
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote: removeNote,
    listNotes : listNotes,
    readNote : readNote
}