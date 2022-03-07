// ** 1 - We can not predict the num random 

var floor = Math.floor(1.8);
var ceiling = Math.ceil( Math.PI );
var random = Math.round(Math.random() * 6)
    
console.log(floor);
console.log(ceiling);
console.log(random);

// Output
// 1
// 4
// random?

// ** 2 - Dice roller

function d6() {
    var roll = Math.round(Math.random() * 6) + 1;
    // your code here
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

// ** 3 - Random answer generator

function randomAnswer() {
    var lifesAnswers = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes – definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];
    var roll = Math.round(Math.random() * lifesAnswers.length);
    return lifesAnswers[roll];
}

console.log(randomAnswer());