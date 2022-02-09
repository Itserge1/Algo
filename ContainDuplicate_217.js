// Given an integer array nums, return true if any value appears at least twice in the array, 
// and return false if every element is distinct.

// Input: nums = [1,2,3,4]
// Output: false

// Input: nums = [1,2,3,1]
// Output: true

var containsDuplicate = (nums) => {
    let newArr = nums.sort()
    let duplicate = false
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] == newArr[i + 1]) {
            duplicate = true
            return duplicate
        }
    }
    return duplicate
};

// var containsDuplicate = (nums) => {
//     let duplicate = false
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i+1; j < nums.length; j++) {
//             if (nums[i] == nums[j]) {
//                 duplicate = true
//                 return duplicate
//             }
//         }
//     };
//     return duplicate
// }
    console.log(containsDuplicate([1, 2, 3, 4]))
    console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))