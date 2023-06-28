// # Given an integer array nums and an integer k, 
// # return the k most frequent elements. You may return the answer in any order.

// # Input: nums = [1,1,1,2,2,3], k = 2
// # Output: [1,2]

// # Input: nums = [1], k = 1
// # Output: [1]


var topKFrequent = function(nums, k) {
    let frequency = {}
    for( let i = 0; i < nums.length; i++){
        if(frequency.hasOwnProperty(nums[i])) frequency[nums[i]] += 1;
        else frequency[nums[i]] = 1;
    }
    let result = Object.keys(frequency).map((key) => [Number(key), frequency[key]]);
    let sortedResult = result.sort((a,b) => {
        return b[1]-a[1]
    })
    let output = []
    for ( let i = 0; i < k; i++){
        output.push(sortedResult[i][0])
    }
    return output;
};

console.log(topKFrequent([1,1,1,2,2,3], 2))
console.log(topKFrequent([1], 1))

// Not done