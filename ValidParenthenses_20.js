// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order


// Input: s = "()"
// Output: true

// Input: s = "()[]{}"
// Output: true

// Input: s = "(]"
// Output: false

var isValid = function (s) {
    let valid = []
    for (let i = 0; i < s.length; i++) {
        let endOfString = valid[valid.length - 1]
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            valid.push(s[i]);

        } else if (s[i] === ')' && endOfString === '(' && valid.length != 0) {
            valid.pop();

        } else if (s[i] === ']' && endOfString === '[' && valid.length != 0) {
            valid.pop();

        } else if (s[i] === '}' && endOfString === '{' && valid.length != 0) {
            valid.pop();

        } else {
            return false;
        }
    }

    return valid.length === 0; //meaining if valid.length === 0 it will be true 
};


// var isValid = (s) => {
//     let CountOpenParents = 0
//     let CountCloseParents = 0
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] == "(") {
//             CountOpenParents++
//             if (s[i + 1] && s[i + 1] == "]" || s[i + 1] == "}") {
//                 return false
//             }
//         } else if (s[i] == "[") {
//             CountOpenParents++
//             if (s[i + 1] && s[i + 1] == ")" || s[i + 1] == "}") {
//                 return false
//             }
//         } else if (s[i] == "{") {
//             CountOpenParents++
//                 if (s[i + 1] && s[i + 1] == "]" || s[i + 1] == ")") {
//                     return false
//             }
//         } else if (s[i] == ")") {
//             CountCloseParents++
//                 if (s[i + 1] && s[i + 1] == "[" || s[i + 1] == "{") {
//                     return false
//             }
//         }
//         else if (s[i] == "]") {
//             CountCloseParents++
//                 if (s[i + 1] && s[i + 1] == "{" || s[i + 1] == "(") {
//                     return false
//             }
//         }
//         else if (s[i] == "}") {
//             CountCloseParents++
//                 if (s[i + 1] && s[i + 1] == "[" || s[i + 1] == "(") {
//                     return false
//             }
//         }
//     };

//     if (CountOpenParents == CountCloseParents){
//         return true
//     } else{
//         return false
//     }
// }

// const isValid = (s) => {
//     keyThings = {
//         "(": 0,
//         ")": 0,
//         "[": 0,
//         "]": 0,
//         "{": 0,
//         "}": 0,
//     }

//     for (let i = 0; i <= s.length; i++) {
//         keyThings[s[i]]++;
//         if (keyThings[")"] > keyThings["("] || keyThings["]"] > keyThings["["] || keyThings["}"] > keyThings["{"] ) {
//             console.log(keyThings)
//             return false
//         }
//     }
//     if (keyThings[")"] == keyThings["("] && keyThings["]"] == keyThings["["] && keyThings["}"] == keyThings["{"] ) {
//         console.log(keyThings)
//         return true;
//     }
// }

// // console.log(isValid("()[]{}"));
// // console.log(isValid("(){}}{"))
// console.log(isValid("(})[]"))
// // console.log(isValid("([)]"))


    console.log(isValid("()[]{}"))