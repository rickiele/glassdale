import { getCriminals, useCriminals } from './criminalProvider.js'
import { criminal } from './criminals.js'

// Targets the chosen class in index.html and places it into a variable criminalElement
//criminalElement stores document.querySelector(".criminalsContainer")
const criminalElement = document.querySelector(".criminalsContainer");

// Emty array which will hold the 
let criminalCards = []

//  Function which 
export const criminalList = () => {
    // getCriminals returns a promise, which allows you to chain .then
    // calls getCriminals
    getCriminals().then( () => {
      // useCriminals function is stored into variable perps
      let perps = useCriminals()

      // within useCriminals(perps), we want to add to criminalCards
      for (const perp of perps) {
        criminalCards.push(criminal(perp))
      }
      criminalElement.innerHTML = criminalCards.join("")
    })
}