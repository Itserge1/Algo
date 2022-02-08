// Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

var lengthOfLastWord = function(s) {
    let startWord = false;
    let count = 0;
    for(let i = s.length-1; i >= 0; i--) {
        if(s[i] !== " ") {
            startWord = true;
        } 
        if(startWord){
            if(s[i] == " "){
                return count;
            } else {
                count++;
            }
        }
    }
    return count;
}

console.log(lengthOfLastWord("Good to start  "))
console.log(lengthOfLastWord("luffy is still joyboy"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))