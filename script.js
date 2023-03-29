// Assignment Code
var characterLength = 8;
var choiceArr = [];

var upper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var special = "!@#$%^&*(){}[]+<>/,.|~?";
var numerics = "1234567890";
var pwLength = document.querySelector("#length");
var upChar = document.querySelector("#upper");
var lcChar = document.querySelector("#lower");
var specChar = document.querySelector("#special");
var numChar = document.querySelector("#numerics");

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

}

function getPrompts() {
  characterLength = parseInt(prompt("How many characters would you like? (8-128 characters)"))


if(isNaN(characterLength) || characterLength < 8 || characterLength)
    alert("Character length has to be a number between 8-128. Please try again")
}

if (confirm("Would you like to use lowercase letters?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
}

if (confirm("Would you like to use uppercase letters?")) {
  choiceArr = choiceArr.concat(upperCaseArr);
}

if (confirm("Would you like to use special characters?")) {
  choiceArr = choiceArr.concat(specialCharArr);
}

if (confirm("Would you like to use numbers?")) {
  choiceArr = choiceArr.concat(numberArr);
}

return true;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword > 128);


