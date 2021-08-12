import { fetchRequests } from "./dataAccess.js"  //dataAccess has the application state aobject that holds the requests array.  that's where we are storing the data we fetched from the API.
import { SinkRepair } from "./SinkRepair.js"  //has the sinkRepair() definition


//allow dynamic html written in js files and render it inside html #comtainer
const mainContainer = document.querySelector("#container")

//since we're fetching api data to be used in the rendered html, the render function definition needs to run fetchRequests, then call sink repair to populate the main container's inner html.
const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = SinkRepair()
        }
    )
}

render()  //call the render function.  This will make our html render on the screen for the user.


//


