//This code is comparing three companies for a client who wants to get their carpet done for a cheap price.
//Experimenting using an object
var carpetCompany = {
    companyName:"Ruggieri Bros",
    paidHrs: 45,
    patchWork: 2,
    basePrice: 7,
    demo: .75,
    sqFt: 2200,
    hrsWorked: 8
};

console.log("The price for", carpetCompany.companyName, "to carpet the place excludng labor is " , (carpetCompany.sqFt * carpetCompany.basePrice).toLocaleString('en-US', {style: 'currency' , currency: 'USD'}));