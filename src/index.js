const endPoint = "http://localhost:3000/api/v1/travel_plans"

document.addEventListener('DOMContentLoaded', () => {
   getTravelPlans()  
   const createTravelPlanForm = document.querySelector("#create-travel-plan-form")
   createTravelPlanForm.addEventListener("submit", (e) => createFormHandler(e))
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



function createFormHandler(e) {
    e.preventDefault()
    const nameInput = document.querySelector('#input-name').value
    const startDateInput = document.querySelector('#input-start_date').value
    const endDateInput = document.querySelector('#input-end_date').value
    const destinationInput = document.querySelector('#destinations').value
    const destinationId = parseInt(destinationInput)
    postFetch(nameInput, startDateInput, endDateInput, destinationId)
}

function postFetch(name, start_date, end_date, destination_id) {
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