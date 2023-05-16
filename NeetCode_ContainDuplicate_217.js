const  ContainDuplicate = (arr) => {
    tempArr = arr.sort();
    duplicate = false
    for(i=0; i<tempArr.length; i++){
        if(tempArr[i] == tempArr[i+1]){
            duplicate = true
            return duplicate
        }
    }
    return duplicate
}

console.log(ContainDuplicate([1,2,3,3,4,5,4,2,1]));
console.log(ContainDuplicate([1,2,3,4,5]));