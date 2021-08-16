import { sendRequest } from "./dataAccess.js"  //so we can use the sendRequest(dataToSendToAPI) function call in this module

//BIRDS EYE VIEW:  this module has a function defined to create the html request form.  The function will be called inside the SinkRepair() definition in SinkRepair.js.  A click event listener responds to the submit button being clicked and 

  
export const ServiceForm = () => {   //20. Service Form definition instantiates variable 'html' to reference the form's html code, then returns the form's code.
    let html = `
        
            <div class="field">
                <label class="label" for="serviceDescription">Description</label>
                <input type="text" name="serviceDescription" class="input" />
            </div>
            <div class="field">
                <label class="label" for="serviceAddress">Address</label>
                <input type="text" name="serviceAddress" class="input" />
            </div>
            <div class="field">
                <label class="label" for="serviceBudget">Budget</label>
                <input type="number" name="serviceBudget" class="input" />
            </div>
            <div class="field">
                <label class="label" for="serviceDate">Date needed</label>
                <input type="date" name="serviceDate" class="input" />
            </div>

            <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {  //21.  instantiate an event listener to listen for a click event.
    if (clickEvent.target.id === "submitRequest") {  //22.  If the click happens on an html element with the id "submitRequest" AKA  the button
        // 23.  Get what the user entered in these fields (querySelector know where to look because of the specified input name) and instantiate variables to reference the what the user entered.
        const userDescription = document.querySelector("input[name='serviceDescription']").value 
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const userBudget = document.querySelector("input[name='serviceBudget']").value
        const userDate = document.querySelector("input[name='serviceDate']").value

        
        const dataToSendToAPI = {  //24.  instantiate an object "dataToSendToAPI".  Give it properties.  Make the values be the information we got from the user in steo 23.  AKA make a new object to store the new request data.
            description: userDescription,
            address: userAddress,
            budget: userBudget,
            neededBy: userDate
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI) //25.  Call the sendRequest function and give it the object we created in step 24 as an argument.  Need to find definition for sendRequest() [hint- dataAccess.js]
    }
})


