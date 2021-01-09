let firstNumber = parseInt(prompt(`Enter your first number please: `));
let secondNumber = parseInt(prompt(`Enter your second number please: `));
let sign = prompt(`Enter your sign please, what do you want to do: `);

// if (sign === `+`) {
//     alert(`Your answer is: ${firstNumber + secondNumber}`);
// } else if (sign === `-`) {
//     alert(`Your answer is: ${firstNumber - secondNumber}`);
// } else if (sign === `*`) {
//     alert(`Your answer is: ${firstNumber * secondNumber}`);
// } else if (sign === `/`) {
//     alert(`Your answer is: ${firstNumber / secondNumber}`);
// } else {
//     alert(`You put not number or not correct symbol`);
// }

switch (sign) {
    case `+`:
        alert(`Your answer is: ${firstNumber + secondNumber}`);
        break;
    case `-`:
        alert(`Your answer is: ${firstNumber - secondNumber}`);
        break;
    case `*`:
        alert(`Your answer is: ${firstNumber * secondNumber}`);
        break;
    case `/`:
        alert(`Your answer is: ${firstNumber / secondNumber}`);
        break;
    default:
        alert(`You put not number or not correct symbol`);
        break;
}