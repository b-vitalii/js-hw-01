//My fifth lesson

// Assigned values to variables
let massage = prompt("Enter your country for delivery");
let priceChina = 150;
let priceChili = 250;
let priceAustralia = 165;
let priceIndia = 90;
let priceJamaica = 130;

// Use switch
switch (massage) {
    case `China`:
        alert(`Shipping to ${massage} will cost ${priceChina} credits`)
        break;
    case `Chili`:
        alert(`Shipping to ${massage} will cost ${priceChili} credits`)
        break;
    case `Australia`:
        alert(`Shipping to ${massage} will cost ${priceAustralia} credits`)
        break;
    case `India`:
        alert(`Shipping to ${massage} will cost ${priceIndia} credits`)
        break;
    case `Jamaica`:
        alert(`Shipping to ${massage} will cost ${priceJamaica} credits`)
        break;
    case null:
        alert(`Canceled by user!`)
        break;
    default:
        alert(`Delivery is not available in your country`);
        break;
}