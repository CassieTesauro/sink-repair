
import { Requests } from "./Requests.js"  //access to requests() definition 
import { ServiceForm } from "./ServiceForm.js"  //access to ServiceForm() definition 

export const SinkRepair = () => { //15. Run the returned html.  Call the Requests() function.  need to find Requests() definition on Requests.js
    return `
    <h1>Maude and Merle's Sink Repair</h1>
    <section class="serviceForm">
        ${ServiceForm()}
    </section>

    <section class="serviceRequests">
        <h2>Service Requests</h2>
        ${Requests()} 
    </section>
    `
}

