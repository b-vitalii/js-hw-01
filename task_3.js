// My third lesson

// Assigned values to variables
let massage;
let request = prompt("Please enter your password");
const ADMIN_PASSWORD = 'adminpass';


// Compared which values entered by user with my variables
if (request === ADMIN_PASSWORD){
    massage = `Welcome!`;
    
} else if (request === null){
    massage = "Canceled by user!";
    
} else {
    massage = `Access Denied, Wrong Password!`;
 
}
alert(massage);