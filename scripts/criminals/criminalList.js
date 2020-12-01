import { getCriminals, useCriminals } from './criminals/criminalProvider.js'

export const criminalList = () => {
    getCriminals().then(
        useCriminals()
      /*
            Now that you have the data, what
            component should be rendered?
        */
    )
};