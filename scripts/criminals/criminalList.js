// This component will also react to an officer being selected.
// The DOM should will generate criminals arrested by selected officer.

import { getCriminals, useCriminals } from './criminalProvider.js';
import { criminal } from './criminals.js';
import { useConvictions } from '../convictions/convictionProvider.js';
import { useOfficers, getOfficers } from '../officers/officerProvider.js';


// Targets the chosen class in index.html and places it into a variable criminalElement
//criminalElement stores document.querySelector(".criminalsContainer")
const criminalElement = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in convictionSelect
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


// officerSelect DROPDOWN / FILTER CRIMINALS BY OFFICER SELECTED ----- //
eventHub.addEventListener("officerSelected", event => {
  
  if (event.detail.officerThatWasChosen !== "0") {
    
    const officers = useOfficers();
    const officer = officers.find( (officer) => officer.id === parseInt(event.detail.officerThatWasChosen) );

    const criminals = useCriminals();
    const matchingCriminals = criminals.filter( (criminal) => criminal.arrestingOfficer === officer.name );
  
    render(matchingCriminals);
    }
  }
)


const render = (criminals) => {
  let criminalCards = []
  for (const perp of criminals) {
    criminalCards.push(criminal(perp))
  }

  criminalElement.innerHTML = criminalCards.join("")
}

//  Function which will take the criminals API data and store into a variable (perps)
export const criminalList = () => {
    getCriminals().then( () => {
      let perps = useCriminals()
      render(perps)
    })
}