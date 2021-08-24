class TravelPlan {
    constructor(travelPlan, travelPlanAttributes) {  
        this.id = travelPlan.id;
        this.name = travelPlanAttributes.name;
        this.start_date = travelPlanAttributes.start_date;
        this.end_date = travelPlanAttributes.end_date;
        this.destination = travelPlanAttributes.destination;
        TravelPlan.all.push(this);

    }
     

renderTravelPlanCard() {
    return `<div data-id=${this.id}>
    <h1>${this.name}</h1>
    <p>${this.start_date}</p>
    <p>${this.end_date}</p>
    <p>${this.destination.city}</p>
    </div>
    <br></br>`;
}
}


TravelPlan.all = [];