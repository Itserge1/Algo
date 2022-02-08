// You are given two strings s and t. String t is generated 
// by random shuffling string s and then add one more letter 
// at a random position.Return the letter that was added to t.

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {character}
//  */

var findTheDifference = (s, t) => {
    for(let i =0; i < s.length; i++){
        for(let j=0; j<t.length; j++){
            if(t[j] === s[i]){
                t = t.slice(0,j) + t.slice(j+1)
                // console.log(t)
            }
        }
    }
    return t;
};
console.log(findTheDifference("abcd", "abcdetr"))

// var findTheDifference = function (s, t) {
//     sortedS = s.split('').sort();
//     sortedT = t.split('').sort();

//     for (let i = 0; i < sortedT.length; i++) {
//         if (sortedS[i] !== sortedT[i]) {
//             return sortedT[i]; 
//         } 
//     }
// };

// console.log(findTheDifference("abcd", "abcdetr"))



