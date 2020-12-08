import { getOfficers, useOfficers } from "./officerProvider.js"


const contentTarget = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")

// Will listen for a "change" event involving the ID officerSelect
eventHub.addEventListener("change", changeEvent => {

  if (changeEvent.target.id === "officerSelect") {
      // Get the name of the selected officer
      const selectedOfficer = changeEvent.target.value

      // Define a custom event
      const customEvent = new CustomEvent("officerSelected", {
          detail: {
              officerThatWasChosen: selectedOfficer
          }
      })

      // Dispatch event to event hub
      eventHub.dispatchEvent(customEvent)
  }
})


// function name may be a problem?
export const officerSelect = () => {
  getOfficers()
  .then( () => {
    const officers = useOfficers()
    render(officers)
  })
}


const render = officersCollection => {
  contentTarget.innerHTML = `
      <select class="dropdown" id="officerSelect">
          <option value="0">Please select an officer...</option>
          ${
            officersCollection.map((officer) => `
                <option value=${officer.id}>
                  ${officer.name}
                </option>
              `)
          }
      </select>
  `
}