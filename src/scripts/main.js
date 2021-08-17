//BIRDS EYE VIEW main.js responsible for connecting js to html, defining and running the render() function.

import { fetchRequests } from "./dataAccess.js"  //dataAccess.js has the application state object that holds the requests array.  That's where we are storing the data we fetched from the API.
import { SinkRepair } from "./SinkRepair.js"  //has the sinkRepair() definition



const mainContainer = document.querySelector("#container") //2. mainContainer references the html #container so we can write dynamic html

//since we're fetching api data to be used in the rendered html, the render function definition needs to run fetchRequests, then call sink repair to populate the main container's inner html.
const render = () => {  //3. define render function.
    fetchRequests().then( //4. call fetchRequest function from dataAccess.js AKA get the requests state we fetched and stored on dataAccess.js
        () => {
            mainContainer.innerHTML = SinkRepair() //14. call function SinkRepair.  Take what SinkRepair() returns and make dynamic html.  Need to find function definition.
        }
    )
}

render()  //1. call the render function. need to find render() definition.


mainContainer.addEventListener( //35.  we see that the custom events dispatch from step 33 is to re-render thae page now that our state has been updated.
    "stateChanged",
    customEvent => {
        render()
    }
)


//


