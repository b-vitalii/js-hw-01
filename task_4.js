// My fourth lesson

// Assigned values to variables
let credits = 35500;
let pricePerDroid = 3000;
let totalPrice = 0;

let massage = prompt("How much droid do you want to buy?");

//Processing what the user entered
if (massage === null){
    alert("Canceled by user!")
} else if (massage < 0){
    alert("Err")
} else {
    totalPrice = massage * pricePerDroid; 
    alert(totalPrice);
        if (totalPrice > credits) {
        alert("Not enough credits in your account!")
        } else if (totalPrice < credits) {
            let remainder = credits - totalPrice;
            alert(`You bought ${massage} of droids and ${remainder} credits remain in your account.`)
        }
}