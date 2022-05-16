// Implement reverseString(str) that takes in a String, and then returns a string of the same length, but with the characters reversed.

// Example: "creature" ---> "erutaerc"

// ** Don't use the built-in reverse() method!

const reverseString = (str) =>{
    let newStr = ""
    for (let i=str.length-1; i>= 0; i--){
        newStr+= str[i];
    }
    return newStr;
}
console.log(reverseString("creature"))


// Create a function that, given a string return, the string accronym's(first Letter's only, capitalized).
// Example: "there's no free lunch - gotta pay yer way" --> "TNFL-GPYW"

const acronyms = (str) => {
    var newStr = "";
    for (let i=0; i<str.length; i++){
        // Checking the first edge case (Front)
        if(str[0] != " " && newStr.length == 0){
            newStr += str[0];
        }
        // if(str[i] =" " && str[i+1] == " "){
        //     newStr = newStr;
        // }
        // Adding acronyms
        else if(str[i+1] && str[i] == " " && str[i+1] != " "){
            newStr+= str[i+1];
        }
    }
    return newStr.toUpperCase()
}
console.log(acronyms("there's no free lunch - gotta pay yer way"));