import { getCriminals, useCriminals } from './criminalProvider.js'

const criminalElement = document.querySelector(".criminalsContainer");
let criminalCards = []

export const criminalList = () => {
    getCriminals().then( () => {
      let perps = useCriminals()

      for (const perp of perps) {
        criminalCards.push(criminal(perp))
      }
      criminalElement.innerHTML = criminalCards.join("")
    })
}