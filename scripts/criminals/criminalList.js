import { getCriminals, useCriminals } from './criminalProvider.js'
import { criminal } from './criminals.js'
import { useConvictions } from '../convictions/convictionProvider.js';


// Targets the chosen class in index.html and places it into a variable criminalElement
//criminalElement stores document.querySelector(".criminalsContainer")
const criminalElement = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

const render = (criminals) => {
  let criminalCards = []
  for (const perp of criminals) {
    criminalCards.push(criminal(perp))
  }

  criminalElement.innerHTML = criminalCards.join("")
}

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', event => {

  // Use the property you added to the event detail.
  if (event.detail.crimeThatWasChosen !== "0"){
      /*
          Filter the criminals application state down to the people that committed the crime
      */
      console.log('crime', event.detail);
      const crimes = useConvictions()
      const crime = crimes.find( (crime) => crime.id === parseInt(event.detail.crimeThatWasChosen) )

      const criminals = useCriminals()
      const matchingCriminals = criminals.filter( (criminal) => criminal.conviction === crime.name)

      render(matchingCriminals)
  }
})

//  Function which will take the criminals API data and store into a variable (perps)
export const criminalList = () => {
    getCriminals().then( () => {
      let perps = useCriminals()
      render(perps)
    })
}