import { useCriminals } from "./criminalProvider.js"

const eventHub = document.querySelector(".container")
const associateTarget = document.querySelector("#associatesContainer")

// CLOSE DIALOG - EVENT  
associateTarget.addEventListener("click", (event) => {
  if (event.target.id === "closeDialog") {
    associatesDialog.close();
  }
})

// ASSOCIATES BUTTON AND DIALOG INNARDS - EVENT LISTENER
eventHub.addEventListener("associatesBtnClicked", (event) => {
  const associatesDialog = document.querySelector("#associatesDialog")
  const dialogText = document.querySelector("#associatesDialog__text")

  console.log('Dialog button event', event.detail.clickedCriminalId);

  const clickedCriminal = useCriminals().find(
      (criminal) => criminal.id === parseInt(event.detail.clickedCriminalId)
    )

  dialogText.innerHTML = `
    <h3>Associates of ${clickedCriminal.name}</h3>
    ${clickedCriminal.known_associates.map( (associate) => `
      <h4>${associate.name}</h4>
      <div>${associate.alibi}</div>`
      ).join("")}`

  associatesDialog.showModal()

})

// ASSOCIATES DIALOG BOX
export const AssociatesDialog = () => {
  associateTarget.innerHTML = 
  `
    <dialog id="associatesDialog">
      <div id="associatesDialog__text"></div>
      <button id="closeDialog">close</button>
    </dialog>
  `
}