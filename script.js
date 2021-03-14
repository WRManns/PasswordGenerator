//Generator Function
var passGen = function() {

// Assignment Code
var generateBtn = document.querySelector("#generate");

//Usuable character arrays

var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
//Empty Arrays for password options
var passCharArr = []


// Window prompts for password preferences
var passLength = parseInt(prompt("Enter Desired Password Length: Choose between 8-100"));
  //Checking for password to be proper length
  if (passLength< 8 || passLength > 100) {
  window.alert("Password must contain between 8 and 100 characters.");
  passGen();
  };

  var upperChars = confirm("Would you like to include Upper-Cased Characters in Password?");
  var passNums = confirm("Would you like to include Numbers in Password?");
  var specChars= confirm("Would you like to include Special Characters in Password?");
  
  //Checking against the window Confirms and concatenating arrays to correspond with User's choices
  if (upperChars && passNums && specChars == true) {
    passCharArr = lowerCasedCharacters.concat(upperCasedCharacters, numericCharacters, specialCharacters);

  } else if (!upperChars && passNums && specChars == true) {
    passCharArr = lowerCasedCharacters.concat(numericCharacters, specialCharacters);

  } else if (upperChars && !passNums && specChars == true) {
    passCharArr = lowerCasedCharacters.concat(upperCasedCharacters, specialCharacters);

  } else if (upperChars && passNums && !specChars == true) {
    passCharArr = lowerCasedCharacters.concat(upperCasedCharacters, numericCharacters);

  } else if (!upperChars && !passNums && specChars == true) {
    passCharArr = lowerCasedCharacters.concat(specialCharacters);

  } else if (!upperChars && passNums && !specChars == true) {
    passCharArr = lowerCasedCharacters.concat(numericCharacters);

  } else if (upperChars && !passNums && !specChars == true) {
    passCharArr = lowerCasedCharacters.concat(upperCasedCharacters);

    //Default is a password made of only lowerCasedCharacter array
  } else {
    passCharArr = lowerCasedCharacters;
  }

function generatePassword() {
  
  var passWordArr = []
  var charCatch;
     for (var i = 0; i < passLength; i++) {
      function randomChar(passCharArr) {
        charCatch = passCharArr[Math.floor(Math.random()*passCharArr.length)]
        passWordArr.push(charCatch)
      }
      randomChar(passCharArr);
      sessionStorage.setItem("password", passWordArr.join(''));
      console.log(passWordArr);
    }
  
  }





  

    




// Write password to the #password input
function writePassword() {
  generatePassword();

  var password = sessionStorage.getItem('password');
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

};
passGen();