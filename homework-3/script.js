// Declaration of variables
var generateButton = document.querySelector("#generate")
var passwordText = document.querySelector("#password")
var copyButton = document.querySelector("#copy")

var password = ''
var specialCharacterList = '@#$%^&*()'
var numericCharactersList = '1234567890'
var lowercaseCharactersList = 'abcdefghijklmnopqrstuvwxyz'
var uppercaseCharactersList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var possibleCharacterList = ''

// Function to make random password
function makePassword() {
    var passwordLength = prompt('How many characters would you like in your password? (8-128)', '');

    // Password Length Validation / function stops if not a number inbetween 8-128
    passwordLength = parseInt(passwordLength)
    if (passwordLength > 128 || passwordLength < 8) {
        alert('Password length must be between 8 and 128. Try again.')
        return;
    }
    
    if (Number.isNaN(passwordLength) === true) {
        alert('Character amount must be a number. Try again.')
        return;
    }

    var specialCharacters = confirm('Would you like special characters?')
    var numericCharacters = confirm('Would you like numbers?')
    var lowercaseCharacters = confirm('Would you like lowercase letters?')
    var uppercaseCharacters = confirm('Would you like uppercase Characters?')

    // Based on confirmations, type of characters are added to "possibleCharacterList" string
    if (specialCharacters === true) {
        possibleCharacterList += specialCharacterList
    }

    if (numericCharacters === true) {
        possibleCharacterList += numericCharactersList
    }

    if (lowercaseCharacters === true) {
        possibleCharacterList += lowercaseCharactersList
    }

    if (uppercaseCharacters === true) {
        possibleCharacterList += uppercaseCharactersList
    }

    // Function stops if no character type is selected
    if (specialCharacters === false && numericCharacters === false && lowercaseCharacters === false && uppercaseCharacters === false) {
        alert('At least one character type must be selected. Try again.')
        return;
    }

    //Randomized password based on characters now in "possibleCharacterList" string * passwordLength
    for (var i = 0; i < passwordLength; i++) {
        password += possibleCharacterList.charAt(Math.floor(Math.random() * possibleCharacterList.length));
    }

    //Push password to HTML textbox
    passwordText.textContent = password
}

// Copy to clipboard function
function clipboard() {
    passwordText.select();
    passwordText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the text: " + passwordText.value);
}

// Button for starting password function
generateButton.addEventListener("click", makePassword);

// Button for copying text function
copyButton.addEventListener("click", clipboard);