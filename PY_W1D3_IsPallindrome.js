// Create a function that returns as boolean of true/false for whether or not an input string is a strict pallindrome. Do not ignore whitespaces, casing matters!!

// Example 1: "racecar" --> true
// Example 2: "Dud" --> false
// Example 3: "oho!" --> false

// pallidrome = reads the same forwards and back!
// loop through our string
// check each element with it's 'sister' element on the other side of the string
// if elements don't match then return false
// if we make it through our loop and never hit false, then return true



const isPallindrome = (str) =>{
    let NewStr ="";
    for(let i = str.length -1; i > -1; i--){
        NewStr += str[i];
    }
    if(NewStr == str){
        return true;
    } else{
        return false;
    }
}

// console.log(isPallindrome("AmnbA")); // FALSE
// console.log(isPallindrome("racecar")); // TRUE
// console.log(isPallindrome("Dud")); // TRUE
// console.log(isPallindrome("oho!")); // ?


function isPallindrome(str) {
    // loop through our string
    for (var i = 0; i < str.length / 2; i++) {
        // check each element with it's 'sister' element on the other side of the string
        // if elements don't match then return false
        // console.log(str[i].toLowerCase());
        // console.log(str[str.length -1 -i].toLowerCase());
        if (str[i].toLowerCase() != str[str.length - 1 - i].toLowerCase()) {
            return false;
        }
    }
    // if we make it through our loop and never hit false, then return true
    return true;
}

// console.log(isPallindrome("AmnbA")); // FALSE
// console.log(isPallindrome("racecar")); // TRUE
// console.log(isPallindrome("Dud")); // ?
// console.log(isPallindrome("oho!")); // ?


function isPallindrome(str) {
    // your code here
    let result = true;
    for (var i = 0; i < str.length / 2; i++) {
        if (result){
            // console.log(str[i].toLowerCase());
            // console.log(str[str.length - 1 - i].toLowerCase());
            if (str[i].toLowerCase() == str[str.length - 1 - i].toLowerCase()) {
                result = true;
            } else{
                result = false
            }

        } else{
            return false
        }
    }
    return result;
}

// console.log(isPallindrome("AmnbA")); // FALSE
// console.log(isPallindrome("racecar")); // TRUE
// console.log(isPallindrome("Dud")); // ?
// console.log(isPallindrome("oho!")); // ?

function isPallindrome(str) {
    let newArr = [];
    for (let i = str.length; i >= 0; i--) {
        newArr.push(str[i]);
    }
    // newArr.join('')
    if (str == newArr.join('')) {
        return true;
    } else {
        return false;
    }
}

// console.log(isPallindrome("AmnbA")); // FALSE
// console.log(isPallindrome("racecar")); // TRUE
// console.log(isPallindrome("Dud")); // ?
// console.log(isPallindrome("oho!")); // ?


