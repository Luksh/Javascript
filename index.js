console.log("Hello World");
var person = "laxman";
person = "Laxman Maharjan";
console.log(person);
/*
This is comment
*/
let name = "Shristi";
name = "Samjhana";
console.log(name);
const pi = 3.14159;
const sample = "Anything";
console.log(sample);
alert("Test");
var personName = prompt("What is your name?");
console.log(personName);
const text = "My friend " + personName + " is very good";
console.log(text);

var username = prompt("Enter your username:");

if (username === null) {
  alert("Login cancelled.");
} else {
  var password = prompt("Enter your password:");

  if (password === null) {
    alert("Login canceled.");
  } else {
    var confirmPassword = prompt("Confirm your password:");

    if (confirmPassword === null) {
      alert("Login canceled.");
    } else {
      if (password === confirmPassword) {
        alert("You have successfully logged in!");
      } else {
        alert("Username and password do not match.");
      }
    }
  }
}
