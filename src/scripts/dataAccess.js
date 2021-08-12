//Since 
const applicationState = {
    requests: []  //B5CH4 "You will need to store that external data in your application state when you fetch it. Create a property named requests in your application state object."
}

const API = "http://localhost:8088" //7. see that API references a URL (url of where the API is online)

export const fetchRequests = () => { //5. define function fetchRequests. purpose: get JSON data from API, turn it into JS
    return fetch(`${API}/requests`) //6. take ${API}/requests and pass it to fetch.  Need to find what API references.
                                    //8.  now know that we are fetching the requests data section of the API'S website
        .then(response => response.json())  //9. taking the response of the promise{} made in step 6.  Right now the response is an encoded JSON string. So we use .json() on the response to parse it into JS data.   
        .then(
            (serviceRequests) => { //10. Take the JS data from step 9 and pass it into this .then().  now the JS data is referenced by 'serviceRequests'. AKA serviceRequests references the external state we fetched from the API
                // Store the external state in application state
                applicationState.requests = serviceRequests  //11. now that servic
            }
        )
}

export const getRequests = () => {  //B5CH4 "export requests state.  Define and export a function named getRequests that returns a copy of the requests state. "
   return applicationState.requests.map()
}


