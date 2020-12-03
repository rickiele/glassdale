// Empty array which will contain getCriminals function into - our fetch API function
let criminals = []

// Function which will contain a copy of the criminals array (.slice)
// .slice makes this a copy of the array
// No arguments in it because we want the whole thing
export const useCriminals = () => {
    return criminals.slice();
}

// Get used to this because you will use this over and over again.
// This function which will ask or fetch API from a source on the net. 
// We are requesting data from an external source.
export const getCriminals = () => {
    // getCriminals is going to return a fetch API from https://criminals.glassdale.us/criminals
    // https://criminals.glassdale.us/criminals server has to respond to our request
    // We don't know how long it will take. The request is going out, being processed, and the data comes back.
    return fetch("https://criminals.glassdale.us/criminals")
    // Process in place to wait for that data to come back 
    // .then is a method, and inside is a function. .json is a method
        .then(response => response.json())
        // another .then is chained onto it - which also contains a function
        // what the previous .then has received (response)
        // this .then will turn that data into an array
        .then(
            parsedCriminals => {
                // another way of displaying data
                // console.table(parsedCriminals)
                criminals = parsedCriminals
            }
        )
}