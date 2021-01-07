// My sixth dop lesson

// Assigned values to variables
let total = 0;
let input = parseInt(prompt("Please enter your number"));

//Use for

for (let t = 0; input > 0; t++) {
    total += input;
    input = parseInt(prompt("Please enter your number"))
    
}
alert(`The total sum of the numbers is ${total}`);