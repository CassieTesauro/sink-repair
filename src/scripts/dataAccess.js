

//BIRD'S EYE VIEW: make an object to hold application state.  fetch the API requests state.  Store that external API state in applicaiton state

const applicationState = {
    requests: []  //12.  store the data referenced by serviceRequests here.  
}

const mainContainer = document.querySelector("#container")

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
   return applicationState.requests.map(request => ({...request}))   //Map coppies the requests as one array. Spread operator breaks the array apart into 1 object per request.
}


export const sendRequest = (userServiceRequest) => {  //26. sees sendRequest definition.  Functions takes in parameter 'userServiceRequest', AKA the object created in step 24
    const fetchOptions = { //27. Instantiate variable fetchOtions 
        method: "POST",  //28. Using the HTTP Request Method "POST", AKA telling the API to create something new using the data in parameter 'userServiceRequest'
        headers: {
            "Content-Type": "application/json"  //29.  New thing created in API will have a "Content-Type" header of "application/json"
        },
        body: JSON.stringify(userServiceRequest)  //30.  Take the JS object and convert it into a JSON string.  
    }


    return fetch(`${API}/requests`, fetchOptions)  //31. sendRequest() returns a fetch that takes in 2 parameters: the API url we referenced as API higher up in this module, and what we created above and referenced with fetchOptions(hey API, make something new and use this.  here's some info and a json string.) So now the API has our transient new request as JSON.
        .then(response => response.json())  //32.  The promise made by the fetch in step 31 has a response.  Take that response and parse it from JSON string into JS.
        .then(() => {  //33. Now that we have the parsed JS and state has changed, we tell sendRequest() function's fetch call to dispatch a new custom event after the POST operation has been completed.  Need to find customEvent's function definition (hint: main.js)
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))  //34. since mainContainer isn't defined on this module, I copied it onto this module from serviceForm.js.
        })
}



