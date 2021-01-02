// My sixth lesson

// Assigned values to variables
let total = 0;
let input = prompt("Please enter your number");

// Use while
while (input) {
    total = total + (+input);
    input = prompt("Please enter your number");
   }
alert(`The total sum of the numbers is ${total}`);
