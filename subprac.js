//This code is comparing three companies for a client who wants to get their carpet done for a cheap price.
//Experimenting using simple equations
//The client wants to hire a carpet company to install carpet around their house. These variables indicate how big the clients house is
//how long they want the workers to work and what they are willing to spend.
var sqFt = 2000;
var patchSqFt =1000;
var hours = 8;
var days = 30;
var amountToSpend = 25000;

//Below we have the three companies the client is considering and what their set amounts are. Patch work, base price and demo is per
//square feet
var carpet = "Ruggieri Bros";
var paidHrs = 45;
var patchWork = 2;
var basePrice = 7;
var demo = .75;

var carpet1 = "Business Interiors";
var paidHrs1 = 50;
var patchWork1 = 3;
var basePrice1 = 3;
var demo1 = 1.50;

var carpet2 = "Rhode Island Flooring";
var paidHrs2 = 47;
var patchWork2 = 5;
var basePrice2 = 4;
var demo2 = 2;

//Here we have the variables given with their respective equations to figure out pricing.
var rugHrsW = paidHrs * hours * days;
var rugBasePrice = basePrice * sqFt;
var rugPatchPrice = patchWork * patchSqFt;
var rugDemoPrice = demo * sqFt;

var rugFinalAmount = rugHrsW + rugBasePrice + rugPatchPrice + rugDemoPrice;
console.log("The amount to hire", carpet,  "for the job is:" , rugFinalAmount.toLocaleString('en-US', {style: 'currency' , currency: 'USD'}));

var biHrsW = paidHrs1 * hours * days;
var biBasePrice = basePrice1 * sqFt;
var biPatchPrice = patchWork1 * patchSqFt;
var biDemoPrice = demo1 * sqFt;

var biFinalAmount = biHrsW + biBasePrice + biPatchPrice + biDemoPrice;
console.log("The amount to hire", carpet1, "for the job is:" , biFinalAmount.toLocaleString('en-US', {style: 'currency' , currency: 'USD'}));

var riHrsW = paidHrs2 * hours * days;
var riBasePrice = basePrice2 * sqFt;
var riPatchPrice = patchWork2 * patchSqFt;
var riDemoPrice = demo2 * sqFt;

var riFinalAmount = riHrsW + riBasePrice + riPatchPrice + riDemoPrice;
console.log("The amount to hire", carpet2, "for the job is:" , riFinalAmount.toLocaleString('en-US', {style: 'currency' , currency: 'USD'}));

//If you remember in the clients demands there was an amountToSpend variable which indicates the amount the client wants to spend on tis service
//this if statement goes through each sum of the companies and figures out which one is the cheapest
if (rugFinalAmount < amountToSpend) {
  console.log("You should hire", carpet, "as they only charge", rugFinalAmount.toLocaleString('en-US', {style: 'currency' , currency: 'USD'}));
    
} 
else 
    if( biFinalAmount < amountToSpend) {
    console.log("You should hire",carpet1,"as they only charge", biFinalAmount.toLocaleString('en-US', {style: 'currency' , currency: 'USD'}));
    }
    else 
        if(riFinalAmount < amountToSpend) {
        console.log("You should hire",carpet2, "as they only charge", riFinalAmount.toLocaleString('en-US', {style: 'currency' , currency: 'USD'}));
        }
    
    
