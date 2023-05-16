/* 
Acronyms
Create a function that, given a string, returns the string’s acronym 
(first letter of each word capitalized). 
Do it with .split first if you need to, then try to do it without
*/

function Acronyms(str) {
    if (str.length == 0){
        return 'null'
    } else if( str.length > 0){
        // let newStr = str[0];
        let newStr = '';
        for(let i=str.length -1; i>-1; i--){
            if (str[i] == ' '){
                newStr += str[i+1];
            }
        }
        newStr += str[0];
        return newStr.toUpperCase();
    }
}
console.log(Acronyms('I am hungry'));
console.log(Acronyms(''));
console.log(Acronyms(' I am hungry'));
console.log(Acronyms('        I am hungry'));




/* 
Book Index
Given an array of ints representing page numbers
return a string with the page numbers formatted as page ranges when the nums
span a consecutive range.
*/