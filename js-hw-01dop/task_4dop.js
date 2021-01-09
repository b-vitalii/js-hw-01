let temperature = parseInt(prompt(`Enter your temperature in: `));

let sign = prompt(`Enter sign temperature which you want to transfer in (С or F): `).toLocaleUpperCase();

if (sign === `C`) {
    alert(`Your answer degrees C = ${(temperature - 32) * (5/9)}`);
} else if (sign === `F`){
    alert(`Your answer degrees F = ${temperature * (9/5) + 32}`);
} else {
    alert(`You enter not number or canceled`)
}