//Generator Function


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
//Empty Array for password options
var passCharArr = []

var passGen = function() {
// Window prompts for password preferences
var passLength = parseInt(prompt("Enter Desired Password Length: Choose between 8-128"));
  //Checking for password to be proper length
  if (passLength< 8 || passLength > 128) {
  window.alert("Password must contain between 8 and 128 characters.");
  return;
  };

  //Prompts for User to choose characters to be used in password
  var lowerChars = confirm("Would you like to include Lower-Cased Characters in Password?");
  var upperChars = confirm("Would you like to include Upper-Cased Characters in Password?");
  var passNums = confirm("Would you like to include Numbers in Password?");
  var specChars= confirm("Would you like to include Special Characters in Password?");
  
  //Checking against the window Confirms and concatenating arrays to correspond with User's choices
  
  if (lowerChars && upperChars && passNums && specChars == true) {
    passCharArr = lowerCasedCharacters.concat(upperCasedCharacters, numericCharacters, specialCharacters);

  } else if (lowerChars && !upperChars && passNums && specChars == true) {
    passCharArr = lowerCasedCharacters.concat(numericCharacters, specialCharacters);

  } else if (lowerChars && upperChars && !passNums && specChars == true) {
    passCharArr = lowerCasedCharacters.concat(upperCasedCharacters, specialCharacters);

  } else if (lowerChars && upperChars && passNums && !specChars == true) {
    passCharArr = lowerCasedCharacters.concat(upperCasedCharacters, numericCharacters);

  } else if (!lowerChars && !upperChars && passNums && specChars == true) {
    passCharArr = numericCharacters.concat(specialCharacters);

  } else if(!lowerChars && upperChars && !passNums && specChars == true) {
    passCharArr = upperCasedCharacters.concat(specialCharacters);

  } else if (!lowerChars && upperChars && passNums && !specChars == true) {
    passCharArr = upperCasedCharacters.concat(specialCharacters);

  } else if (lowerChars && !upperChars && !passNums && !specChars == true) {
    passCharArr = lowerCasedCharacters;

  } else if (!lowerChars && upperChars && !passNums && !specChars == true) {
    passCharArr = upperCasedCharacters;

  } else if (!lowerChars && !upperChars && passNums && !specChars == true) {
    passCharArr = numericCharacters;

  } else if (!lowerChars && !upperChars && !passNums && specChars == true) {
    passCharArr = specialCharacters;

    //Alert to user if no character choices were made
  } else {
      window.alert("Password must contain some varient of characters")
      return;
  }
  return passLength
}

function generatePassword() {
  var length = passGen();
  
  var passWordArr = []
  var charCatch;
     for (var i = 0; i < length; i++) {
      function randomChar(passCharArr) {
        charCatch = passCharArr[Math.floor(Math.random()*passCharArr.length)]
        passWordArr.push(charCatch)
      }
      randomChar(passCharArr);
      console.log(passWordArr);
    }
    return passWordArr.join('')
  
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  //var password = sessionStorage.getItem('password');
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);