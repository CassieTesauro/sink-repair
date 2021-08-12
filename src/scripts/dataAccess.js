//BIRD'S EYE VIEW: make an object to hold application state.  fetch the API requests state.  Store that external API state in applicaiton state

const applicationState = {
    requests: []  //12.  store the data referenced by serviceRequests here.  
}

const API = "http://localhost:8088" //7. see that API references a URL (url of where the API is online)

export const fetchRequests = () => { //5. define function fetchRequests. purpose: get JSON data from API, turn it into JS
    return fetch(`${API}/requests`) //6. take ${API}/requests and pass it to fetch.  Need to find what API references.
                                    //8.  now know that we are fetching the requests data section of the API'S website
        .then(response => response.json())  //9. taking the response of the promise{} made in step 6.  Right now the response is an encoded JSON string. So we use .json() on the response to parse it into JS data.   
        .then(
            (serviceRequests) => { //10. Take the JS data from step 9 and pass it into this .then().  now the JS data is referenced by 'serviceRequests'. AKA serviceRequests references the external state we fetched from the API
                applicationState.requests = serviceRequests  //11. take the external state referenced by 'serviceRequests' and store that data in our application in the requests array in the applicationState object up higher in this module. AKA external state is now application state
            }
        )
}

export const getRequests = () => {  //13.  define getRequests().  purpose: return service requests data we stored as application state in step 12.  
   return applicationState.requests.map(request => ({...request})) 
}


