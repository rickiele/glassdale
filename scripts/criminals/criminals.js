// criminals into HTML
export const criminal = (criminalObj) => {
  return `
  <article class="criminal">
    <h2>${criminalObj.name}</h2>
    <div>Crime: ${criminalObj.conviction}</div>
    <div>Term Start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
    <div>Term End: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</div>
  </article>
  `
}