/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { getConvictions, useConvictions } from "./ConvictionProvider.js"

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".filters__crime");


// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {

  // Only do this if the `crimeSelect` element was changed
  if (event.target.id === "crimeSelect") {
      // Create custom event. Provide an appropriate name.
      const customEvent = new CustomEvent("crimeChosen", {
          detail: {
              crimeThatWasChosen: event.target.value
          }
      })

      // Dispatch to event hub
      eventHub.dispatchEvent(customEvent)
  }
})



const render = convictionsCollection => {
  // Create select dropdown menu 
  contentTarget.innerHTML = `
      <select class="dropdown" id="crimeSelect">
          <option value="0">Please select a crime...</option>
          ${
            convictionsCollection.map((crimeObject) => `
            <option value=${crimeObject.id}>
              ${crimeObject.name}
            </option>  
            `)
          }
      </select>
  `
}

// Function <convictionSelect>
export const convictionSelect = () => {
    // Trigger fetching the API data and loading it into application state

    getConvictions()
    .then( () => {
      // Get all convictions from application state
      const convictions = useConvictions()
      render(convictions)
    })
}

