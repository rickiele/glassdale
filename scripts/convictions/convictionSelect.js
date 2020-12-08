/*
 *   convictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */

// listen for the selection of a crime and capture the chosen value
// send out a message ( customEvent ) via the eventHub

import { getConvictions, useConvictions } from "./convictionProvider.js"


// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")
const eventHub = document.querySelector(".container")

// This will listen for a "change" event with the "Please select a crime..." dropdown
eventHub.addEventListener("change", event => {
  
  // if crimeSelect element was changed, do so and so
  if (event.target.id === "crimeSelect") {
      
      const customEvent = new CustomEvent("crimeChosen", {
          detail: {
              crimeThatWasChosen: event.target.value
          }
      })
      // Dispatch to the event hub
      eventHub.dispatchEvent(customEvent)
  }
})

// Trigger fetching the API data and then loading it into application state
 // Get all convictions from application state
export const convictionSelect = () => {
  
    getConvictions()
    .then( () => {
      const convictions = useConvictions()
      render(convictions)
    })
}

const render = convictionsCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map((crime) => `
                  <option value=${crime.id}>
                    ${crime.name}
                  </option>
                `)
            }
        </select>
    `
}