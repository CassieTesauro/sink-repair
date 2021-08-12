
import { Requests } from "./Requests.js"  //access to requests() definition 

export const SinkRepair = () => { //15. Run the returned html.  Call the Requests() function.  need to find Requests() definition
    return `
    <h1>Maude and Merle's Sink Repair</h1>
    <section class="serviceForm">
    </section>

    <section class="serviceRequests">
        <h2>Service Requests</h2>
        ${Requests()} 
    </section>
    `
}

