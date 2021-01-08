import { saveNote } from "./NoteDataProvider.js"
import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js"

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
  const criminalsCollection = useCriminals()

  contentTarget.innerHTML = `
  <section class="noteForm">
  <select class="dropdown" id="suspect">
      <option value="0">Please select a suspect...</option>
      ${
          criminalsCollection.map(
            (criminal) => `
              <option value=${criminal.id}>
                ${criminal.name}
              </option>
          `)
      }
  </select>
      <input type="text" id="officer-name" placeholder="Officer Name">
      <textarea id="note-text" placeholder="Insert Note Here"></textarea>
      <button id="saveNote">Save Note</button>
    </section>
  `
}

export const NoteForm = () => {
  getCriminals()
  .then( () => render())
}

