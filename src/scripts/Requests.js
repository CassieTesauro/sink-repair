import { getRequests } from "./dataAccess.js" //getRequests() definition shows it will return a map() copy of service requests data we stored as application state in step 12.
import { deleteRequest } from "./dataAccess.js" //deleteRequest() function definition 

export const Requests = () => {  //16.  sees requests() function definition
    const requests = getRequests() //17.  instantiates variable 'requests' to reference the result of calling getRequests().  AKA variable 'requests' now references the map() copy of service requests data we stored as application state in step 12.
    const requestListElement = (request) => {  //36.  Added delete button line of code to list item.  Need event listener to delete when button is clicked.
        return `<li>
                    ${request.description}
                    <button class="request__delete" id="request--${request.id}">Delete</button>  
                </li>`
    }
    let html = ` 
        <ul>
            ${requests.map(requestListElement).join("")}
        </ul>
    `

    return html  //18. Requests() defined to make variable 'html' reference an unordered html list that contains a map of what 'requests' references.  Then the list is returned.
}



const mainContainer = document.querySelector("#container")  //37.  Listener identify's the correct request by id and deletes it.

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})
