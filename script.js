// Assignment code here
var specialCharacter = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
"~", "*", "?", ":"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var letterCap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var isSpecial = false
var isNumber = false
var isCapLetter = false
var isLowerLetter = false 
var passwordLength = 0



function userPrompt () {
  passwordLength = parseInt(prompt("How many characters do you want your password to be?"))
  console.log (passwordLength);

  if (passwordLength < 8 && passwordLength > 128) { 
    alert("Does not meet password requirments. Password does not meet between 8 and 128 characters")
    
    return
  } 

  if(typeof passwordLength !== "number") {
    alert ("Password length must be a number")
    return 
  }

   isSpecial = confirm ("Would you like to use special characters (!@#)")
   isNumber = confirm ("Would you like to use numbers")
   isCapLetter = confirm ("Would you like capital letters")
   isLowerLetter = confirm ("Would you like lowercase letters ")

  if(isSpecial === false && isNumber === false && isCapLetter === false && isLowerLetter === false) {
    alert ("Password must contain one character type.")
    return
  }
}


var generatePassword = function(){
    userPrompt()
  var password = "";
  //Use the variables that are passed through the fuction to make distinguish an array and randomlly grab a character
  
  Loop1: 
  while (password.length < passwordLength) { 

    if (isSpecial === true) {
      var specialIndex =  Math.floor(Math.random()*specialCharacter.length);
      password = password + specialCharacter [specialIndex];
      if( password.length === passwordLength) { break Loop1; }
    }
  
    if (isNumber === true) {
      var numberIndex =  Math.floor(Math.random()*numbers.length);
      password = password + numbers[numberIndex];
      if( password.length === passwordLength) { break Loop1; }
    }

  
    if (isCapLetter === true) {
      var letterCapIndex =  Math.floor(Math.random()*letterCap.length);
      password = password + letterCap[letterCapIndex];
      if( password.length === passwordLength) { break Loop1; }
    }
  
    if (isLowerLetter === true) {
      var letterLowerIndex =  Math.floor(Math.random()*letterLower.length);
      password = password + letterLower[letterLowerIndex];
      if( password.length === passwordLength) { break Loop1; }
    }
  }
 return password;     
}
 




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// return them back to the prompt 

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
