const endPoint = "http://localhost:3000/api/v1/travel_plans"
const destinationPoint = "http://localhost:3000/api/v1/destinations"


document.addEventListener('DOMContentLoaded', () => {
   getTravelPlans()
   getDestinations()
   const createTravelPlanForm = document.querySelector("#create-travel-plan-form")
   createTravelPlanForm.addEventListener("submit", (e) => createFormHandler(e))

//    const createDestinationForm = document.querySelector("#create-destination-form")
//    createDestinationForm.addEventListener("submit", (e) => createDestinationHandler(e))
  

})

function getTravelPlans() {
    fetch(endPoint)
    .then(response => response.json())
    .then(travel_plans => {
        travel_plans.data.forEach(travelPlan => {
            let newTravelPlan = new TravelPlan(travelPlan, travelPlan.attributes)
     document.querySelector('#travel-plan-container').innerHTML += newTravelPlan.renderTravelPlanCard()
       
        
        })

    })
}


function getDestinations() {
    fetch(destinationPoint)
    .then(response => response.json())
    .then(destinations => {
        destinations.data.forEach(destination => {

            // id = destination.id
            // city = destination.attributes.city; 
            // country = destination.attributes.country;
            // description = destination.attributes.description;
            let newDestination = new Destination(destination, destination.attributes)
            newDestination.populateSelect()

     
    })
  
    })}  


function createFormHandler(e) {
    e.preventDefault()
    const nameInput = document.querySelector('#input-name').value
    const startDateInput = document.querySelector('#input-start_date').value
    const endDateInput = document.querySelector('#input-end_date').value
    const destinationSelected = document.getElementById('select-destination').selectedIndex
    const destinationId = parseInt(destinationSelected)
    postPlan(nameInput, startDateInput, endDateInput, destinationId)
}

// function createDestinationHandler(e) {
//     e.preventDefault()
//     const cityInput = document.querySelector('#input-city').value
//     const countryInput = document.querySelector('#input-country').value
//     const descriptionInput = document.querySelector('#input-description').value
//     postDestination(cityInput, countryInput, descriptionInput)
// }

function postPlan(name, start_date, end_date, destination_id) {
   fetch(endPoint, {
       method: 'POST',
       headers: {"Content-Type": "application/json"},
       body: JSON.stringify({
           name: name,
           start_date: start_date,
           end_date: end_date,
           destination_id: destination_id
       })
    })
    .then(response => response.json())
    .catch(err => console.log(err))

    .then(travel_plan => {

       const travelPlanData = travel_plan.data
       let newTravelPlan = new TravelPlan(travelPlanData, travelPlanData.attributes)
       document.querySelector('#travel-plan-container').innerHTML += newTravelPlan.renderTravelPlanCard()
        })  
} 

function postDestination(city, country, description) {
    fetch(destinationPoint, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            city: city,
            country: country,
            description: description,
        })
     })
     .then(response => response.json())
     .then(destination => {
             console.log(destination)
//         // const destinationData = destination.data
//         // let newDestination = new Destination(destinationData, destinationData.attributes)
//         // document.querySelector('#destination-container').innerHTML += newDestination.renderDestinationCard()
   })  
 } 
