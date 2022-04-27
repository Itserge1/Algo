// Given a string, returns whether the sequence of various parentheses, braces and brackets within it are valid. 

// Example 1: "({[({})]})" --> true
// Example 2: "d(i{a}l[t]o)n{e!" --> false
// Example 2: "{{[a]}}(){bcd}{()}" --> true

// hint: consider using an array or object to solve

const BracesValid = (str) => {
    // Cheking for if the number of opening is equal to the number of closing.
    let count = 0;
    // Checking for the order of opening and closing
    let Arr = [];

    for(let i=0; i<str.length; i++){
        if(str[0] == ")" || str[0] == "}" || str[0] == "]"){
            return false
        }

        else if(str[i] == "(" || str[i] == "{" || str[i] == "["){
            count++;
            Arr.push(str[i]);
        } 
        else if (str[i] == ")" ){
            count--;
            if(Arr[Arr.length - 1] == "("){
                Arr.pop();
            }
            else{
                return false
            }
        }
        else if (str[i] == "}" ){
            count--;
            if(Arr[Arr.length-1] == "{"){
                Arr.pop();
            }
            else{
                return false
            }
        }
        else if (str[i] == "]"){
            count--;
            if(Arr[Arr.length - 1] == "["){
                Arr.pop();
            }
            else{
                return false
            }
        } 
    }
    if (count == 0 & Arr.length == 0){
        return true;
    }else{
        return false
    }
}



// console.log(BracesValid("({[({})]})"));
// console.log(BracesValid("d(i{a}l[t]o)n{e!"));
// console.log(BracesValid("{{[a]}}(){bcd}{()}"));

console.log(BracesValid("()[]{}")); //--> true
console.log(BracesValid("(]")); // --> false
console.log(BracesValid("()")); // --> true
