var charLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var charUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var charNumeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var charSpecial = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '[', '|', '`', '~', '/', '<', '>', ',', '.', '?', ';', ':'];
var finalCharArray = [];
var charLength;

function getOptions() {

    //get user to pick how long the password should be
    charLength = prompt("Please enter desired amount of characters for password (must be between 8-128)");

    //ensure user chooses a valid integer between 8-128
    while (charLength < 8 || charLength > 128) {
        alert("Please make sure to enter a number between 8 and 128.");
        var charLength = prompt("Please enter desired amount of characters for password (must be between 8-128)");
    }

    var specialChars = confirm("Click OKAY to include special characters.");
    var numericChars = confirm("Click OKAY to include numeric characters.");
    var lowercaseChars = confirm("Click OKAY to include lowercase characters.");
    var uppercaseChars = confirm("Click OKAY to include uppercase characters.");

    //if user wants to use special characters...
    if (specialChars) {
        //include special chars here
        finalCharArray = finalCharArray.concat(charSpecial);
    }

    //if user wants to use numeric characters...
    if (numericChars) {
        //include numeric chars here
        finalCharArray = finalCharArray.concat(charNumeric);
    }
    
    //if user wants to use lowercase characters...
    if (lowercaseChars) {
        //include lowercase chars here
        finalCharArray = finalCharArray.concat(charLower);
    }

    //if user wants to use uppercase characters...
    if (uppercaseChars) {
        //include uppercase chars here
        finalCharArray = finalCharArray.concat(charUpper);
    }

    //if user says no to all 4 options, force user to try again
    if (specialChars === false && numericChars === false && lowercaseChars === false && uppercaseChars === false) {
        alert("You need to click OKAY to at least one of the options for character choice. Please try again.");
    }

    //create the password, randomly, one char at a time from loop, from the final array of choice 
    var newPassword = [];
    for (var i = 0; i < charLength; i++) {
        newPassword += finalCharArray[(Math.floor(Math.random() * finalCharArray.length))];
    }

    //show password in an alert and in the text area
    alert("Your new generated password is: " + newPassword);

    //if user clicks copy to clipboard...copy it!
    document.getElementById("password").value = newPassword;
}

//copies the generated password for user
function copyToClipboard() {
    let textarea = document.getElementById("password");
    textarea.select();
    document.execCommand("copy");
}

//if user clicks on generate
 document.getElementById("generate").onclick = getOptions;



