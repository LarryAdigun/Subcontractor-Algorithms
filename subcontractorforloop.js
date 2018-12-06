//This code is comparing three companies for a client who wants to get their carpet done for a cheap price.
//Exprimenting using a for loop
//The client wants to hire a carpet company to install carpet around their house. These variables indicate how big the clients house is
//how long they want the workers to work and what they are willing to spend.
var sqFt = 2000;
var patchSqFt =1000;
var hours = 8;
var days = 30;
var amountToSpend = 25000

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

//Here we have the new variables given to set up the for loop

var payment = paidHrs * hours;
var overallPrice = [patchWork,basePrice, demo,payment];
var squareFoot = [patchSqFt,sqFt, sqFt, days];
var sum = 0;
var i;

//This For loop multiplies each array index item and adds them up to show the total price for the companies.

for(i =0; i < overallPrice.length; i++) { sum += overallPrice[i] * squareFoot[i]; }
console.log ("ThE price of the job for" , carpet , "to do the flooring job" , sum.toLocaleString('en-US', {style: 'currency' , currency: 'USD'}));

var payment1 = paidHrs1 * hours;
var overallPrice1 = [patchWork1,basePrice1, demo1, payment1];
var squareFoot1 = [patchSqFt,sqFt, sqFt, days];
var sum1 = 0;
var j;

for(j =0; j < overallPrice1.length; j++) { sum1 += overallPrice1[j] * squareFoot1[j];}
console.log("The price of the job for" , carpet1 , " to do the flooring job" , sum1.toLocaleString('en-US', {style: 'currency' , currency: 'USD'}));

var payment3 = paidHrs2 * hours;
var overallPrice2 = [patchWork2,basePrice2,demo2, payment3];
var squareFoot2 = [patchSqFt,sqFt, sqFt, days];
var sum2 = 0;
var k;

for(k =0; k < overallPrice2.length; k++) { sum2 += overallPrice2[k] * squareFoot2[k];}
console.log("The price of job for" , carpet2 , "to do the flooring job" , sum2.toLocaleString('en-US', {style: 'currency' , currency: 'USD'}));

//If you remember in the clients demands there was an amountToSpend variable which indicates the amount the client wants to spend on tis service
//this if statement goes through each sum of the companies and figures out which one is the cheapest
if (sum < amountToSpend) {
    console.log("You should hire", carpet, "as they only charge", sum.toLocaleString('en-US', {style: 'currency' , currency: 'USD'}));
    
} 
else 
    if( sum1 < amountToSpend) {
    console.log("You should hire",carpet1,"as they only charge", sum1.toLocaleString('en-US', {style: 'currency' , currency: 'USD'}));
    }
    else 
        if(sum2 < amountToSpend) {
        console.log("You should hire",carpet2, "as they only charge", sum2.toLocaleString('en-US', {style: 'currency' , currency: 'USD'}));
        }
    