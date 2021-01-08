// Function that contains the HTML to be injected
const eventHub = document.querySelector(".container")

// ASSOCIATES BUTTON - DISPATCH
eventHub.addEventListener("click", (event) => {
  if (event.target.id.includes("associates--")) {
    console.log("Click Event: Is this working?");
    const customEvent = new CustomEvent("associatesBtnClicked", {
      detail: {
        clickedCriminalId: event.target.id.split("--")[1]
      }
    })
    eventHub.dispatchEvent(customEvent)
  }
})

export const criminal = (criminalObj) => {
  return `
  <article class="criminal">
    <h2>${criminalObj.name}</h2>
    <div>Crime: ${criminalObj.conviction}</div>
    <div>Term Start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</div>
    <div>Term End: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</div>
    <button id="associates--${criminalObj.id}" class="associate_btn">Associate Alibis</button>
  </article>
  `
}