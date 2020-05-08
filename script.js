// Assignment Code
var generateBtn = document.querySelector("#generate");



//1. container for numbers 
//2. container for letter lowerCase
//3. container for letter upperCase
//4. container for specialCharacters

// How many characters would you like your password to contain? Prompt
// Click OK to confirm including special characters. Boolean
// Click OK to confirm including numeric characters. Boolean
// Click OK to confirm including lowercase characters. Boolean
// Click OK to confirm including uppercase character. Boolean





function generatePassword() {

  

var numberCharacters = 0;
while(numberCharacters < 8 || numberCharacters > 128) {
  numberCharacters = prompt("How many characters do you want in password?");
}


var confirmLetterUpper = confirm("Click OK if you want to include uppercase characters.");

var confirmLetterLower = confirm("Click OK if you want to include lowercase characters.");

var confirmNumber = confirm("Click OK if you want to include numbers.");

var confirmSpecialCharacters = confirm("Click OK if you want to include special characters.");


  


password = "";

// Password is created here
for (i = 0; i < numberCharacters; i++) {
  //password += getRandomLower();
  var x = Math.floor(Math.random() * 4);

  if (x <= 0 && confirmLetterUpper) {
    password += getRandomUpper();
  }
  else if (x <= 1 && confirmLetterLower) {
    password += getRandomLower();
  }
  
  else if (x <= 2 && confirmNumber) {
    password += getRandomNumber();
  }
  
  else if (x <= 3 && confirmSpecialCharacters) {
    password += getRandomSymbol();
  }
  else {
    password += getRandomSymbol();
  }

  


}

    
    



  

  
    return password
}


function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}









// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
