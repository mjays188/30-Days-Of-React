const { countries, countries_data } = require("./countries");

//
let age = Math.ceil(Math.random()*100);
console.log(age);
if(age < 18){
    console.log(`You are left with ${18-age} years to drive`);
} else {
    console.log(`You are old enough to drive`);
}

// year is a leap year if it's divisible by 4 and it's divisible by 400
let year = 2100 // Math.ceil(Math.random()*1200) + 1000;
if( (year & 3)==0 && (year % 400)==0) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is a non-leap year`);
}