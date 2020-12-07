import { criminalList } from './criminals/criminalList.js'
import { convictionSelect } from './convictions/convictionSelect.js'

criminalList();
convictionSelect();



// TODO:
// What feature are we implementing?
// to filter our criminals by the crimes committed

// What tasks do we need to complete to implement the feature?
// need to filter the criminal data by matching the crime that has been selected.
// listen for the selection of a crime and capture the chosen value
// use the selected value to filter the criminal data
// update the state of the DOM with the filtered criminal data

// Flow
// user selects the crime from the dropdown - need to set up event listened for selection
// DOM will need to reflect the selection of the crime - update state with filtered crime data

// Which modules are involved?
// convictionSelect
// criminalList
