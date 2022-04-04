// Create a function that, given an input string, returns a boolean true/false whether parentheses in that string are valid.

// Example 1:"y(3(p)p(3)r)s" --> true
// Example 2: "n(0(p)3" --> false
// Example 3: "n)0(t(o)k" --> false

// hint: consider using an array or object to solve

// check entire string, return true/false
// every single opening parens has a closing
// never hit an closing parens before a opening parens
// ONLY care about the parens in the string

const ParensValid = (str) => {
    let arr = [];
    let open= 0;
    let close = 0;
    for (let i=0; i<str.length; i++){
        if(str[i] == "("){
            arr.push(str[i]);
            open++;
        }
        else if (str[i] == ")"){
            arr.push(str[i]);
            close++;
        }
    }
    if(open == close && arr[0] != ")"){
        return true;
    } else{
        return false
    }
}
console.log(ParensValid("y(3(p)p(3)r)s"));
console.log(ParensValid("n(0(p)3"));
console.log(ParensValid("n)0(t(o)k"));
