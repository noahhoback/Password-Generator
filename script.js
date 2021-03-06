// User Input Variables
var enter;
var confirmNumber;
var confirmSpecial;
var confirmUpper;
var confirmLower;
//Password Variable Values
//Numbers
number = [1,2,3,4,5,6,7,8,9];
//Letters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Special Characters
special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Space is used for the conversion to uppercase
space = [];

var choices;

//Converts the letters to uppercase
var toUpper = function(x) {
  return x.toUpperCase();
}
//creating a variable for converting to uppercase
alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function() {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

//start of function that generates a password
function generatePassword() {
// asking for user input
  enter = parseInt(prompt("How many characters would you like your password to be? Choose between 8 and 128"));
//if statement for user validation
  if (!enter) {
    alert("A value is needed");
} else if (enter < 8 || enter > 128) {
  //Validating user input and starting user input prompts
  
  enter = parseInt(alert("Must be between 8 and 128 Characters"));

} else {
// continues function once input is validated
  confirmNumber = confirm("Will your password contain numbers?");
  confirmSpecial = confirm("Will your password contain special characters?");
  confirmUpper = confirm("Will your password conatin uppercase letters?");
  confirmLower = confirm("Will your password contain lowercase letters?");
};

//if statement for 4 negative selections
if (!confirmSpecial && !confirmNumber && !confirmUpper && !confirmLower) {
  choices = alert("You must choose criteria for your password!");
  
}
//else if for all combinations of 3 positive selections
else if (confirmSpecial && confirmNumber && confirmUpper && confirmLower) {

  choices = special.concat(number, alpha, alpha2);
}

else if (confirmSpecial && confirmNumber && confirmUpper) {
  choices = special.concat(number, alpha2);
}
else if (confirmSpecial && confirmNumber && confirmLower) {
  choices = special.concat(number, alpha);
}
else if (confirmSpecial && confirmUpper && confirmLower ) {
  choices = special.concat(alpha, alpha2);
}
else if (confirmNumber && confirmLower && confirmUpper) {
  choices = number.concat(alpha, alpha2);
}
//else if for all combinations of 2 positive selections
else if (confirmSpecial && confirmNumber) {
  choices = special.concat(number);

}else if (confirmSpecial && confirmLower) {
  choices = special.concat(alpha);

} else if (confirmSpecial && confirmUpper) {
choices = special.concat(alpha2);
}
else if (confirmLower && confirmNumber) {
  choices = special.concat(number);

}else if (confirmLower && confirmUpper) {
choices = alpha.concat(alpha2);

}else if (confirmNumber && confirmUpper) {
  choices = number.concat(alpha2);
}
//else if for all variations of 1 positive selection
else if (confirmSpecial) {
  choices = special;
  }
  
  else if (confirmNumber) {
    choices = number;
  }
  else if (confirmLower) {
    choices = alpha;
  }
  //space variable is used to fill conversion to uppercase
  else if (confirmUpper) {
    choices = space.concat(alpha2);
  };

var password = [];

//for-loop for random selection of all variables
for (var i = 0; i < enter; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  password.push(pickChoices);
}
//joins the password array and converts the password array into a string
var ps = password.join("");
UserInput(ps);
return ps;
}

//Places password value in textbox and changes function input to use textconent
function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}

//the following code copies the password to clipboard
var copy = document.querySelector("#copy");
copy.addEventListener("click", function() {
  copyPassword();
});

function copyPassword() {
  document.getElementById("password").select();
  document.execCommand("Copy");
  alert("Your password has been copied to your clipboard!")
}

