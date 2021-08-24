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
            debugger
            let newTravelPlan = new TravelPlan(travelPlan)

           render(travelPlan)
        
        })

    })
}

function render(travel_plan) {
    const travelPlanHTML = `<div data-id=${travel_plan.id}>
    <h1>${travel_plan.attributes.name}</h1>
    <p>${travel_plan.attributes.start_date}</p>
    <p>${travel_plan.attributes.end_date}</p>
    <p>${travel_plan.attributes.destination.city}</p>
    <button data-id=${travel_plan.id}>description</button>
    </div>
    <br></br>`;

    document.querySelector('#travel-plan-container').innerHTML += travelPlanHTML
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
       console.log(travel_plan.error)

       const travelPlanData = travel_plan.data
        render(travelPlanData)
        })  
} 