import { getRequests } from "./dataAccess.js" //getRequests() definition shows it will return a map() copy of service requests data we stored as application state in step 12.

export const Requests = () => {  //16.  sees requests() function definition
    const requests = getRequests() //17.  instantiates variable 'requests' to reference the call of getRequests.  AKA variable 'requests' now references the map() copy of service requests data we stored as application state in step 12.
    const requestListElement = (request) => {
        return `<li>${request.description}</li>`
    }
    let html = ` 
        <ul>
            ${
                requests.map(requestListElement).join("") 
            }
        </ul>
    `

    return html  //18. Requests() defined to make variable 'html' reference an unordered html list that contains a map of what 'requests' references.  Then the list is returned.
}
