function two() {
    return 2;
}

function one() {
    return 1;
}

function calculate(initialValue, incrementValue) {
    return initialValue() + incrementValue() + incrementValue();
}

console.log(calculate(two, one));


function meal(animal) {
    animal.food = animal.food + 10;
}

var dog = {
    food: 10
};
meal(dog);
meal(dog);

console.log(dog.food);


// var globalVar = 77;

// function scopeTest() {
//     var localVar = 88;
// }

// console.log(localVar);


// // Task 1: Build a function-based console log message generator
// function consoleStyler(color, background, fontSize, txt) {
//     var message = "%c" + txt;
//     var style = `color: ${color};`;
//     style += `background: ${background};`;
//     style += `font-size: ${fontSize};`;
//     console.log(message, style);
// }

// // Task 2: Build another console log message generator
// function celebrateStyler(reason) {
//     var fontStyle = "color: tomato; font-size: 50px";
//     if (reason == "birthday") {
//         console.log(`%cHappy birthday`, fontStyle);
//     } else if (reason == "champions") {
//         console.log(`%cCongrats on the title!`, fontStyle);
//     } else {
//         console.log(message, style);
//     }
// }

// // Task 3: Run both the consoleStyler and the celebrateStyler functions
// consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
// celebrateStyler('birthday');

// // Task 4: Insert a congratulatory and custom message
// function styleAndCelebrate(color, background, fontSize, txt, reason) {
//     consoleStyler(color, background, fontSize, txt);
//     celebrateStyler(reason);
// }
// // Call styleAndCelebrate
// styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');


// function objectMaker(val) {
//     return {
//         prop: val
//     }
// }


// let localScope = "pee";

// function testScope() {
//     var localScope = "poop";
//     console.log("inside function " + localScope);
// }
// testScope();
// console.log(localScope);


// function addTwoNums(a, b) {
//     console.log(a + b)
// }

// function randomNum() {
//     return Math.floor((Math.random() * 10) + 1);
// }
// function specificNum() { return 42 };

// var useRandom = true;

// var getNumber;

// if(useRandom) {
//     getNumber = randomNum
// } else {
//     getNumber = specificNum
// }

// addTwoNums(getNumber(), getNumber())