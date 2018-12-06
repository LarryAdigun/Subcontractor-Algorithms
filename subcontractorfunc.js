////This code is comparing three companies for a client who wants to get their carpet done for a cheap price.
//Experimenting using functions
//The client wants to hire a carpet company to install carpet around their house. These variables indicate how big the clients house is
//how long they want the workers to work and what they are willing to spend. This is all for your reference it is not used in the function.
//I don't even need it because its all down there.

var client = {

    squareFt: 2000,

    patchSqFt: 1000,

    hours: 8,

    days: 30,

    amountToSpend: 25000

};


//Below we have the three companies the client is considering and what their set amounts are. Patch work, base price and demo is per

//square feet


var company1 = {

    carpetCompany: "Ruggieri Bros",

    paidHrs: 45,

    patchWork: 2,

    basePrice: 7,

    demo: .75,

};



var company2 = {

    carpetCompany: "Business Interiors",

    paidHrs: 50,

    patchWork: 3,

    basePrice: 3,

    demo: 1.50

};



var company3 = {

    carpetCompany: "Rhode Island Flooring",

    paidHrs: 47,

    patchWork: 5,

    basePrice: 4,

    demo: 2

};




//Here we have a function which takes the clients demands and uses the information below to calculate inside of the function.



function cheapestCompany(name, paidHrs, basePrice, patchWorkPrice, demo) {

    this.name = name;

    this.paidHrs = paidHrs;

    this.basePrice = basePrice;

    this.patchWorkPrice = patchWorkPrice;

    this.demo = demo;

    var amount = ((paidHrs * 8) * 30) + (basePrice * 2000) + (patchWorkPrice * 1000) + (demo * 2000);

    console.log("The price to hire", name, "is", amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));



}

cheapestCompany("Ruggieri Bros", 45, 7, 2, .75);

cheapestCompany("Buisness Interiors", 50, 3, 3, 1.50);

cheapestCompany("Rhode Island Flooring", 47, 4, 5, 2);

