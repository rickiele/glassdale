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
    getCriminals().then( () => {
      let perps = useCriminals()

      for (const perp of perps) {
        criminalCards.push(criminal(perp))
      }
      criminalElement.innerHTML = criminalCards.join("")
    })
}