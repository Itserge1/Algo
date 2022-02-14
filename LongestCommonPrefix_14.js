// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function(strs) {
    let emptyStr = ""

    for (let i=0; i < strs[0].length; i++){ 
        let newWord = strs[0][i]

        for (let j = 1; j < strs.length; j++){ 
            if(strs[j][i] !== newWord)
            return emptyStr
        }
        emptyStr += newWord 
    }

    return emptyStr
}


console.log(longestCommonPrefix  (["flower", "flow", "flight"]))
console.log(longestCommonPrefix  (["dog", "racecar", "car"]))
