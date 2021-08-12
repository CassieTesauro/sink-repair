const applicationState = { 
    requests: []  //B5CH4 "You will need to store that external data in your application state when you fetch it. Create a property named requests in your application state object."
}

const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
            }
        )
}

export const getRequests = () => {  //B5CH4 "export requests state.  Define and export a function named getRequests that returns a copy of the requests state. "
   return applicationState.requests.map()
}


