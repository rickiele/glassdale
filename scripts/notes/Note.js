export const NoteHTMLConverter = (noteObject) => {
  return `
      <section class="note">
          <div class="note__text">Officer: ${ noteObject.officer }</div>
          <div class="note__suspect">Suspect: ${ noteObject.suspect }</div>
          <div class="note__author">Message: ${ noteObject.message }</div>
          <div class="note__timestamp">Timestamp: ${ new Date(noteObject.timestamp).toLocaleDateString('en-US')  }</div>
      </section>
  `
}