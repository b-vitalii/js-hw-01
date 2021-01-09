let myNumber = parseInt(prompt(`Enter your number please (1-10):`));
let computerNumber = Math.floor(Math.random() * 10) + 1;

if (myNumber == computerNumber) {
    alert(`You  win! You guessed the number: ${computerNumber}`)
}  else {
    alert(`You lose! Try again! Computer number: ${computerNumber}`)
}
