// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

var isPalindrome = (x) => {
    let newX = x.toString()
    for(let i=0; i<Math.floor(newX.length/2); i++){
        if(newX[i] != newX[newX.length-1 - i]){
            return false
        }
    }
    return true
};

console.log(isPalindrome(1221))
console.log(isPalindrome(1234))