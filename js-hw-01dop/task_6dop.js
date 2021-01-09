let numberOne = parseInt(prompt(`Enter first number: `));
let numberTwo = parseInt(prompt(`Enter second number: `));
let numberThree = parseInt(prompt(`Enter third number: `)); 
  
    if ((isNaN(numberOne)) || (isNaN(numberTwo)) || (isNaN(numberThree))) {
            
            alert('Not a number has been entered'); 
        
        } else {
            alert(`Your numbers, what you has been entered: ${numberOne}, ${numberTwo}, ${numberThree}`);
            alert(`Min number is: ${Math.min(numberOne, numberTwo, numberThree)}`);
            alert(`Max number is: ${Math.max(numberOne, numberTwo, numberThree)}`);
        }