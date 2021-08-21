// Global Variables
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numbers = "1234567890";
var special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var eachChoice = [];
var charTypes = "";

// Generates a password that meets criteria chosen by the user
function generatePassword() {

  var password = "";

  // Prompts the user to choose criteria for password
  var hasLowerCase = confirm("Do you want to include lowercase characters?");
  var hasUpperCase = confirm("Do you want to include uppercase characters?");
  var hasNumbers = confirm("Do you want to include number characters?");
  var hasSpecial = confirm("Do you want to include special characters?");

  // Determines which character types were selected
  if (hasLowerCase) {
    var random = Math.floor(Math.random() * lowercase.length);
    var choice = lowercase[random];
    eachChoice.push(choice);
    charTypes = charTypes.concat(lowercase);
  }
  if (hasUpperCase) {
    var random = Math.floor(Math.random() * uppercase.length);
    var choice = uppercase[random];
    eachChoice.push(choice);
    charTypes = charTypes.concat(uppercase);
  }
  if (hasNumbers) {
    var random = Math.floor(Math.random() * numbers.length);
    var choice = numbers[random];
    eachChoice.push(choice);
    charTypes = charTypes.concat(numbers);
  }
  if (hasSpecial) {
    var random = Math.floor(Math.random() * special.length);
    var choice = special[random];
    eachChoice.push(choice);
    charTypes = charTypes.concat(special);
  }
  // If no character type was selected, a message displays and returns the function
  if (!hasLowerCase && !hasUpperCase && !hasNumbers && !hasSpecial) {
    alert("You must select at least one character type.");
    return;
  }

  // Prompts user to choose password length
  var length = prompt("Choose a length of at least 8 characters and no more than 128 characters.");

  // Validates if the input is a number of at least 8 and no more than 128
  if (length > 7 && length < 129) {
    for (var i = 0; i < length - eachChoice.length; i++) {
      var random = Math.floor(Math.random() * charTypes.length);
      password = password + charTypes[random];
    }
    // Ensures that at least one of every chosen character type is included in password
    password = password + eachChoice.join("");
  } else {
    // Displays message and returns function if input was not valid
    alert("Invalid input. Please try again.");
    return;
  }

  charTypes = "";
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
