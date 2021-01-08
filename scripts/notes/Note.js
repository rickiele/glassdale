export const NoteHTMLConverter = (noteObject) => {
  return `
      <section class="note">
         <h3>Note ${ noteObject.id }</h3>
          <div class="note__text">Officer: ${ noteObject.officer }</div>
          <div class="note__suspect">Suspect: ${ noteObject.criminalName}</div>
          <div class="note__author">Message: ${ noteObject.message }</div>
          <div class="note__timestamp">Timestamp: ${ new Date(noteObject.timestamp).toLocaleDateString('en-US')  }</div>
          <button id="deleteNote--${noteObject.id}">Delete</button>
      </section>
  `
}
