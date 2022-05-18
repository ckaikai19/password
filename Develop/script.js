
var generateBtn = document.querySelector("#generate");
var textArea = document.getElementById('password')

function writePassword() {
  var passwordLength = parseInt(prompt('Enter number between 8 and 128 characters for password length'));
  
  var includesLowerCase = confirm('Do you want to include lowercase characters'),
      includesUpperCase = confirm('Do you want to include uppercase characters'),
      includesNumeric = confirm('Do you want to include numeric characters'),
      includesSpecial = confirm('Do you want to include special characters');

  var lowercase = 'abcdefghijklmnopqrstuvwxyz',
      uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      numeric = '1234567890',
      special = '!@#$%^&*()_+{}|":?><~-`';

  var avaibleCharacters = '',
      password = '';


  if(!includesLowerCase && !includesUpperCase && !includesNumeric && !includesSpecial) {
    alert("You must include atleast one character type, please refresh the page");
  } else {
    console.log('continue');
  }

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

  for (var i = 0; i <= passwordLength; i++) {
    password += avaibleCharacters.charAt(Math.floor(Math.random() * avaibleCharacters.length));
  }

  textArea.innerText = password;
}


generateBtn.addEventListener("click", writePassword);
