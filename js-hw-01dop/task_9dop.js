let myOption = prompt(`Enter the option (Rock or Paper or Scissors): `).toLowerCase();
let computerOption = Math.random();
    

if (computerOption <= 0.33) {
    computerOption = `rock`;
} else if (computerOption >= 0.67) {
    computerOption = `paper`;        
} else {
    computerOption = `scissors`;    
}


      if (myOption === computerOption) {
        alert(`DRAW! Computer option ${computerOption.toUpperCase()}, your option ${myOption.toUpperCase()}.`);
    } else if (myOption === `rock` && computerOption === `paper`) {
        alert(`You LOSE! Computer option ${computerOption.toUpperCase()}, your option ${myOption.toUpperCase()}.`);
    } else if (myOption === `rock` && computerOption === `scissors`) {
        alert(`You WIN! Computer option ${computerOption.toUpperCase()}, your option ${myOption.toUpperCase()}.`);
    } else if (myOption === `paper` && computerOption === `rock`) {
        alert(`You WIN! Computer option ${computerOption.toUpperCase()}, your option ${myOption.toUpperCase()}.`);
    } else if (myOption === `paper` && computerOption === `scissors`) {
        alert(`You LOSE! Computer option ${computerOption.toUpperCase()}, your option ${myOption.toUpperCase()}.`);
    } else if (myOption === `scissors` && computerOption === `rock`) {
        alert(`You LOSE! Computer option ${computerOption.toUpperCase()}, your option ${myOption.toUpperCase()}.`);
    } else if (myOption === `scissors` && computerOption === `paper`) {
        alert(`You WIN! Computer option ${computerOption.toUpperCase()}, your option ${myOption.toUpperCase()}.`);
    } else {
        alert(`Canceled or Not correct DATA.`);
    }

    












switch (computerAnswer) {
        case Rock:
            alert(``)
            break;
    
        default:
            break;
    }