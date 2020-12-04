import { getCriminals, useCriminals } from './criminalProvider.js'
import { criminal } from './criminals.js'

// Targets the chosen class in index.html and places it into a variable criminalElement
//criminalElement stores document.querySelector(".criminalsContainer")
const criminalElement = document.querySelector(".criminalsContainer");

// Empty array which the criminals data will push into
let criminalCards = []

//  Function which will take the criminals api data and store into a variable (perps)
export const criminalList = () => {
  
    // getCriminals returns a promise, which allows you to chain .then
    // calls getCriminals
    getCriminals().then( () => {
      // useCriminals function is stored into variable perps
      let perps = useCriminals()
      
      // Then within perps, we want to push the data into the empty array above
      for (const perp of perps) {
        criminalCards.push(criminal(perp))
      }
    
      // MDN: The join() method creates and returns a new string 
      // by concatenating all of the elements in an array
      // Sticking the cards into the DOM
      criminalElement.innerHTML = criminalCards.join("")
    })
}