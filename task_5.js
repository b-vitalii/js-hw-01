//My fifth lesson

let massage = prompt("Enter your country for delivery").toUpperCase();
let priceChina = 150;
let priceChili = 250;
let priceAustralia = 165;
let priceIndia = 90;
let priceJamaica = 130;

// Use switch
switch (massage) {
    case `CHINA`:
        alert(`Shipping to ${massage} will cost ${priceChina} credits`)
        break;
    case `CHILI`:
        alert(`Shipping to ${massage} will cost ${priceChili} credits`)
        break;
    case `AUSTRALIA`:
        alert(`Shipping to ${massage} will cost ${priceAustralia} credits`)
        break;
    case `INDIA`:
        alert(`Shipping to ${massage} will cost ${priceIndia} credits`)
        break;
    case `JAMAICA`:
        alert(`Shipping to ${massage} will cost ${priceJamaica} credits`)
        break;
    case null:
        alert(`Canceled by user!`)
        break;
    default:
        alert(`Delivery is not available in your country`);
        break;
}