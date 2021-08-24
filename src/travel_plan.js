class TravelPlan {
    constructor(id = travelPlanAttributes) {  
        this.id = travelPlanAttributes.id  ;
        this.name = travelPlanAttributes.name;
        this.start_date = travelPlanAttributes.start_date;
        this.end_date = travelPlanAttributes.end_date;
        this.destination = travelPlanAttributes.destination;
        TravelPlan.call.push(this);
    }
     
}