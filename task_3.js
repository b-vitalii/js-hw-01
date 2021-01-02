// My third lesson

// Assigned values to variables
let massage = prompt("Please enter your password");
const ADMIN_PASSWORD = 'adminpass';

// Compared which values entered by user with my variables
if (massage === ADMIN_PASSWORD){
    alert("Welcome!")
} else if (massage === null){
    alert("Canceled by user!")
} else {
    alert("Access Denied, Wrong Password!")
}