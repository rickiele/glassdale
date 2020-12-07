/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { getConvictions, useConvictions } from "./ConvictionProvider.js"

// Target the DOM element where <select> will be rendered
const contentTarget = document.querySelector(".filters__crime");

// Function <render>
// Is convictionsCollection a function? a parameter?
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

