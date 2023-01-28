

//////////////////
//Create Strings using Template Literals
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    let li = `<li class="text-warning">${arr[i]}</li>`
    failureItems.push(li)
  }
  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);

//////////////////
//Destructuring (Objects and Arrays)
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
const { today, tomorrow } = HIGH_TEMPERATURES;

//Nested Destructuring
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;

//Use destructuring to remove the first tow elements
function removeFirstTwo(list) {
  const [, , ...shorterList] = list; //,, acts as placeholders for the first two elements
  return shorterList;
}
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
console.log(sourceWithoutFirstTwo)

//////////////////
//Spread Paramater
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];  // Spread
console.log(arr2);

//////////////////
// Rest Paramater
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

//////////////////
//Arrow Functions
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

const magic = () => new Date();
console.log(magic());

//////////////////
//Freeze Object
let obj = {
  name: "FreeCodeCamp",
  review: "Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj);

//////////////////
//SCOPE
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
checkScope();

let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function () {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);