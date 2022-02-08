// Given an integer num, repeatedly add all its digits until the result 
// has only one digit, and return it.

// Example
// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.

// const addDigits = (num) => {
//     let temp = 0;
//     let newNum = num.toString()
//     if(newNum.length <= 1){
//         return newNum
//     } else{
//         for(let i=0; i<newNum.length; i++){
//             temp +=  parseInt(newNum[i]) ;
//             // console.log(temp)
//         }
//         if(temp >= 10){
//             return addDigits(temp)
//         }
//     }
//     return temp
// };

// // Leetcode Algo #258
// const addDigits = function(num){
//     var numArr = num.toString().split("");
//     let temp = 0;
//     for(let i = 0; i < numArr.length; i++){
//         temp += parseInt(numArr[i])
//     }
//     if(temp < 10) {
//         return temp
//     } else {
//         return addDigits(temp)
//     }
// }

// console.log(addDigits(12345))

// @@@@@@@@@@ Withoug a loop or a recursive @@@@@@@@@

const addDigits = (num) => {
    let newNum = num.toString()
    if(newNum.length <= 1){
        return num
    } else if (num%9 == 0){
        return 9
    }else{
        return num%9
    }
};

console.log(addDigits(18))