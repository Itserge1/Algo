
// Given a String, return the longest pallindromic substring. Given "hello dada", return "dad". 
// Given "not much" return "n". Include spaces as well!

// Example 1: "my favorite racecar erupted" --> "e racecar e"
// Example 2: "nada" --> "ada"
// Example 3: "nothing to see" --> "ee"

function isPallindrome(str) {
    // loop through our string
    for (var i = 0; i < str.length / 2; i++) {
        // check each element with it's 'sister' element on the other side of the string
        // if elements don't match then return false
        if (str[i] != str[str.length - 1 - i]) {
            return false;
        }
    }
    // if we make it through our loop and never hit false, then return true
    return true;
}

function longestPallindrome(str) {
    var longestPal = "";
    for(let i = 0; i < str.length - 1; i++){
        for(let j = i + 1; j < str.length; j++){
            if (str[i] == str[j]){
                let temp = str.substring(i, j+1);
                
                // // See the palindrom
                // if(isPallindrome(temp)){
                //     console.log(temp);
                // }

                if(isPallindrome(temp) && temp.length > longestPal.length){
                    longestPal = str.substring(i, j+1);
                }
            }
        }
    }
    return longestPal;
}

console.log(longestPallindrome("my favorite racecar erupted"));
console.log(longestPallindrome("nada"));
console.log(longestPallindrome("nothing to see"));