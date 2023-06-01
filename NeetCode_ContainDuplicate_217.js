// const  ContainDuplicate = (arr) => {
//     tempArr = arr.sort();
//     duplicate = false
//     for(i=0; i<tempArr.length; i++){
//         if(tempArr[i] == tempArr[i+1]){
//             duplicate = true
//             return duplicate
//         }
//     }
//     return duplicate
// }

// console.log(ContainDuplicate([1,2,3,3,4,5,4,2,1]));
// console.log(ContainDuplicate([1,2,3,4,5]));



// const containsDuplicate = (arr) => {
//     // first get the count of the current array
//     // Create a set, and populate it with the givenn arr
//     const NewSet = new Set(arr);
//     // Then i want to compare the both of them .
//     if (NewSet.size == arr.length){
//         // if they are equal (there is no duplicate: flase)
//         return false;
//     }
//     // else there is(true)
//     return true
// }

const containsDuplicate = (arr) => {
    // first get the count of the current array
    // Create a set, and populate it with the given arr
    const NewSet = new Set(arr);
    // // Then i want to compare the both of them .
    // if they are equal (there is no duplicate: flase)
    // else there is(true)
    return NewSet.size !== arr.length
}

console.log(containsDuplicate([1,1,2,2,3,2,3,5,5,5,7]));
console.log(containsDuplicate([1,2,3,4,5]));
