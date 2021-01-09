let minutes = Number(prompt(`Enter the number of minutes to convert to hour format: `));
let hours = minutes / 60;


if (isNaN(minutes) || minutes < 0) {
    alert(`Not correct data`);
} else if (hours) {
    alert(`Your time hours and minutes: ${Math.floor(hours)}:${minutes % 60}`);
} else {
    alert(`Exit`);
}