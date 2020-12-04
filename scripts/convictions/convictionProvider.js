// This component will fetch crimes and export 
//a useConvictions() method for other compenents to import.

let convictions = [];

export const useConvictions = () => {
  return convictions.slice();
}

export const getConvictions = () => {
  return fetch("https://criminals.glassdale.us/crimes")
    .then(taco => taco.json())
    .then(
      parsedConvictions => {
        console.table(parsedConvictions)
        convictions = parsedConvictions
      }
    )
};