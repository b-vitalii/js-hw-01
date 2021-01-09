let score = parseInt(prompt(`Enter your number of points (1-100): `));

if (score >= 89 && score <= 100) {
    alert(`Your score is A`);
    } else if (score >= 75 && score <= 88) {
        alert(`Your score is B`);
    } else if (score >= 60 && score <= 74) {
        alert(`Your score is C`);
    } else if (score >= 45 && score <= 59) {
        alert(`Your score is D`);
    } else if (score >= 20 && score <= 44) {
        alert(`Your score is E`);
    } else if (isNaN(score) || score > 100 || score < 0) {
        alert(`Not correct data`);
    } else {
        alert(`Your score is F`);
    }