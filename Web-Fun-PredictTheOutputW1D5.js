// ** 1 - How to swap varialbles

var fruit1 = "apples";
var fruit2 = "oranges";
    
fruit2 = fruit1;
    
console.log(fruit2 + " and " + fruit1); 

// Output
// apples and apples

var fruit1 = "apples";
var fruit2 = "oranges";
    
var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;
    
console.log(fruit2 + " and " + fruit1);

// Output
// apples and oranges


// ** 2 - While loops
var start = 0;
var end = 12;
    
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}
console.log("start: " + start)
console.log("end: " + end)

// Output
//  start: 0, end: 12
//  start: 2, end: 10
//  start: 4, end: 8
//  start: 6
//  end: 6
