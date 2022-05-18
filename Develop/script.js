// grabbed the button and text area form the DOM
var generateBtn = document.querySelector("#generate");
var textArea = document.getElementById('password')

function writePassword() {
  // Askes user to ender a number than coverts it to an integer
  var passwordLength = parseInt(prompt('Enter number between 8 and 128 characters for password length'));

  // Askes user if they want to include the following character types: lowercase/uppercase/numbers and special characters
  var includesLowerCase = confirm('Do you want to include lowercase characters'),
      includesUpperCase = confirm('Do you want to include uppercase characters'),
      includesNumeric = confirm('Do you want to include numeric characters'),
      includesSpecial = confirm('Do you want to include special characters');

  // storing all characters in each variable
  var lowercase = 'abcdefghijklmnopqrstuvwxyz',
      uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      numeric = '1234567890',
      special = '!@#$%^&*()_+{}|":?><~-`';

  // creating a varible to store avalible charaters and the soon to be password
  var avaibleCharacters = '',
      password = '';


  // if the user hasnt selected a single character type, this sends an alert to do so
  if(!includesLowerCase && !includesUpperCase && !includesNumeric && !includesSpecial) {
    alert("You must include atleast one character type, please try again");
  }

  // if user has selected a character, it adds it to the avalibleCharacters variable
  if(includesLowerCase){
    avaibleCharacters += lowercase;
  }

  if(includesUpperCase){
    avaibleCharacters += uppercase;
  }

  if(includesNumeric){
    avaibleCharacters += numeric;
  }

  if(includesSpecial){
    avaibleCharacters += special
  }

  // iterates through all characters in avaibleCharacters then adds (at random) a character to the password variable
  for (var i = 0; i <= passwordLength; i++) {
    password += avaibleCharacters.charAt(Math.floor(Math.random() * avaibleCharacters.length));
  }

  // sets innerText of the textArea to the password string
  textArea.innerText = password;
}

// on click, runs writePassword function
generateBtn.addEventListener("click", writePassword);
