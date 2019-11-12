//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the screen like so: "You will be a X in Y, making $N for Z."

var JobTitle = 'professor';
var Location = 'UK';
var Salary = '53,000';
var Company = 'Royal College of Art';

console.log('You will be a ' + JobTitle + ' in ' + Location + ' and making $' + Salary + ' in ' + Company);

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the screen like so: "They are NN years old.", substituting the values.

var CurrentYear = 2019 ;
var BirthYear = 1992;
var age= CurrentYear - BirthYear;
console.log('He is ' + age +' years old.');


//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
var MyAge = 27;
var MaxAge = 100;
var PerDayUsage = 5;
var NeededSupply = ((MaxAge-MyAge)*365)*PerDayUsage;
console.log('You will need ' + NeededSupply + ' to last you until the ripe old age of ' + MaxAge);

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".
var radius = 3;
var circumference = Math.PI * 2*radius;
var area = Math.PI * radius*radius;

console.log("The circumference is " + circumference + "The area is " + area);
//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."
var fahrenheit=78;
var temperature=(fahrenheit-32)*5/9;
console.log(fahrenheit+'°F' + 'is' +temperature+'°C');