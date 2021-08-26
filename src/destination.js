class Destination {
    constructor(destination, destinationAttributes) {  
        this.id = destination.id;
        this.city = destinationAttributes.city;
        this.country = destinationAttributes.country;
        this.description = destinationAttributes.description;
        Destination.all.push(this);

    }
    populateSelect() {
    const ele = document.getElementById('select-destination');
        ele.innerHTML = ele.innerHTML +
            '<option text="' + this.id + '">' + this.city + '</option>';   
    }
}


    Destination.all =[]

    // renderDestinationCard() {
    //     return `<div data-id=${this.id}>
    //     <h1>${this.city}</h1>
    //     <p>${this.country}</p>
    //     <p>${this.description}</p>
    //     </div>
    //     <br></br>`;
    // } 
