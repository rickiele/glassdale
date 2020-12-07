import { useConvictions } from '../convictions/ConvictionProvider.js';
import { getCriminals, useCriminals } from './criminalProvider.js'
import { criminal } from './criminals.js'

// Targets the chosen class in index.html and places it into a variable criminalElement
//criminalElement stores document.querySelector(".criminalsContainer")

const eventHub = document.querySelector(".container");
const criminalElement = document.querySelector(".criminalsContainer");

// Listen for the custom event you dispatched in convictionSelect
eventHub.addEventListener("crimeChosen", event => {
  // Use the property you added to the event detail.
  if (event.detail.crimeThatWasChosen !== "0"){
      /*
          Filter the criminals application state down to the people that committed the crime
      */
      console.log('crime', event.detail);
      const crimes = useConvictions();
      const crime = crimes.find( (crime) => crime.id === parseInt(event.detail.crimeThatWasChosen) )

      const criminals = useCriminals();
      const matchingCriminals = criminals.filter( (criminal) => criminal.conviction === crime.name)

      /*
          Then invoke render() and pass the filtered collection as
          an argument
      */
     render(matchingCriminals)
  }
})

const render = criminalCollection => {
  criminalElement.innerHTML = criminalCards.join("")
}


// Empty array which the criminals data will push into
let criminalCards = []

//  Function which will take the criminals api data and store into a variable (perps)
export const criminalList = () => {
  
    // getCriminals returns a promise, which allows you to chain .then
    // calls getCriminals
    getCriminals().then( () => {
      // useCriminals function is stored into variable perps
      let perps = useCriminals()
  
      // // Then within perps, we want to push the data into the empty array above
      for (const perp of perps) {
        criminalCards.push(criminal(perp))
      }
    
      // // MDN: The join() method creates and returns a new string 
      // // by concatenating all of the elements in an array
      // // Sticking the cards into the DOM
      criminalElement.innerHTML = criminalCards.join("")
    })
}

// export const criminalList = () => {
//   getCriminals().then( () => {
//     let perps = useCriminals()
//     render(perps)
//   })
// }