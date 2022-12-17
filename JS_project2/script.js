//The Conversion factor for miles to Kilometers
let milestokilometer = 1.60934;

//Ask user for date in miles 
let miles = prompt("Please enter the distance in miles")
console.log(miles, "miles");

//User the conversion factor to multiply miles to Kilometers
let kilometers = miles * milestokilometer;

let sentance =  "The distance of " +  miles + " miles is equals to "+ kilometers + " kilometers"

console.log(sentance);
