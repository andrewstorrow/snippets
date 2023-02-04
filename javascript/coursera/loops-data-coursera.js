function count(...basket) {
    console.log(basket.length)
}

count(10, 9, 8, 7, 6);

//Spread & Rest operator
const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
console.log(starter);

const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, "not", fruits2)

const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array

//Sets - Unique Values
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);

//Maps
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");
bestBoxers.get(1); // 'The Champion'

console.log(bestBoxers);

//Arrays
const nums = [0,10,20,30,40,50];
console.log(nums);
var filteredNums = nums.filter( function(num) {
    return num > 20;
})
console.log(filteredNums)

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});



// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() { 
    for (item of dairy) { 
        console.log(item);
    }
}
logDairy();
// Task 2
const animal = { canJump: true };
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

console.log(`Object.keys(bird) = ${Object.keys(bird)}`);
function birdCan() {
    for (prop of Object.keys(bird)) {
        console.log(`${prop}: ${bird[prop]}`);
    }
}
birdCan();
// Task 3
function animalCan() {
    for (prop in bird) {
        console.log(`${prop}: ${bird[prop]}`);
    }
}
animalCan();



//For of loop
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}
