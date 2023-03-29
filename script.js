// Assignment Code
var characterLength = 8;
var choice = [];

var specialChar = ["!","@","#","$","%","^","&","*","(",")","{","}","/", "<",">","?"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y", "z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = ["1","2","3","4","5","6","7","8","9","0"]


var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); 
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
 } else {
  passwordText.value = "";
}
}
 
function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
      var randomIndex = Math.floor(Math.random() * choice.length);
      password = password + choice[randomIndex];
  }

 return password;
}

function getPrompts() {
  choiceArr = [];

  characterLength = parseInt(prompt("How many characters would you like? (8-128 characters)"))


if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number between 8-128. Please try again")
}


if (confirm("Would you like to use lowercase letters?")) {
    choice = choice.concat(lowerCase);
}

if (confirm("Would you like to use uppercase letters?")) {
  choice = choice.concat(upperCase);
}

if (confirm("Would you like to use special characters?")) {
  choice = choice.concat(specialChar);
}

if (confirm("Would you like to use numbers?")) {
  choice = choice.concat(number);
}

return true; 
}





