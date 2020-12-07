// Empty array that will hold our crimes
let convictions = []

// Function which contains a copy of the crimes data in the array <convictions>
export const useConvictions = () => convictions.slice()

// Function to fetch crimes API
export const getConvictions = () => {

  return fetch("https://criminals.glassdale.us/crimes")
  .then(response => response.json())
  .then(
    // Another function <parsedCrimes> which places the data you just received 
    // into the empty array <convictions>
    parsedCrimes => {
      // console.table(parsedCrimes) - shows table of data in console.
      convictions = parsedCrimes
    }
  )
}
