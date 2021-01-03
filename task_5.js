//My fifth lesson

let massage = prompt("Enter your country for delivery");
let priceChina = 150;
let priceChili = 250;
let priceAustralia = 165;
let priceIndia = 90;
let priceJamaica = 130;

// Use switch
switch (massage.toLowerCase()) {
    case `china`:
        alert(`Shipping to ${massage} will cost ${priceChina} credits`)
        break;
    case `chili`:
        alert(`Shipping to ${massage} will cost ${priceChili} credits`)
        break;
    case `australia`:
        alert(`Shipping to ${massage} will cost ${priceAustralia} credits`)
        break;
    case `india`:
        alert(`Shipping to ${massage} will cost ${priceIndia} credits`)
        break;
    case `jamaica`:
        alert(`Shipping to ${massage} will cost ${priceJamaica} credits`)
        break;
    case null:
        alert(`Canceled by user!`)
        break;
    default:
        alert(`Delivery is not available in your country`);
        break;
}