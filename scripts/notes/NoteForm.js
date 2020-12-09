import { saveNote } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveNote") {

      // Gather data from render HTML below
      const officer = document.querySelector("#officer").value
      const suspect = document.querySelector("#suspect").value
      const message = document.querySelector("#message").value

      // Make a new object representation of a note
      const newNote = {
          officer: officer,
          suspect: suspect,
          message: message,
          timestamp: Date.now()
      }

      // Change API state and application state
      saveNote(newNote)
  }
})



const render = () => {
    contentTarget.innerHTML = `
      <input type="text" id="officer" placeholder="Officer Name">
      <input type="text" id="suspect" placeholder="Suspect Name">
      <textarea id="message"> </textarea>
      <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}

