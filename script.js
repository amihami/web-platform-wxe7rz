const button = document.querySelector("button")
const input = document.getElementById("codename")
const str = codename.value;

button.addEventListener ("click", output)


function findLength(str){
  if (str.length>=5){
    return true;
  }
  else {
    alert ("Your codename must have 5 characters or more")
    return false;
  }
};

function oneLoweroneUpper(str){
  if (/^(?=.*[a-z])(?=.*[A-Z])/.test(str)){
    return true;
  }
  else {
    alert ("Your codename must have at least one uppercase character and one lowecase character")
    return false;
  }
};

function twoDigits(str){
  if (/^(?=.*\d{2,})/.test(str)){
    return true;
  }
  else {
    alert ("Your codename must have at least 2 digits")

    return false;
  }
};

function output (){
  if(findLength(input.value) === true && oneLoweroneUpper(input.value) === true && twoDigits(input.value) == true){
    alert ("codename accepted!")
  }
}

// Write a function that checks the length of the string. The function should output true if the string is more than 5 characters long. Otherwise, return false.

// Write a function that checks the string contains at least one lowercase letter; and at least one uppercase letter. If both are present, the function should return true - and if either are missing, it should return false.

// Write a function which checks whether the string has at least two numbers in it. If it does, then return true and otherwise return false.