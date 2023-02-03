const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    let diff = par - strokes;

    if (strokes === 1) {
        return names[0];
    } else if (diff >= 2) {
        return names[1];
    } else if (diff === 1) {
        return names[2];
    } else if (diff === 0) {
        return names[3];
    } else if (diff === -1) {
        return names[4];
    } else if (diff === -2) {
        return names[5];
    } else {
        return names[6];
    }
}

console.log(golfScore(4, 1)) //should return the string Hole-in-one!
console.log(golfScore(4, 2)) //should return the string Eagle
console.log(golfScore(5, 2)) //should return the string Eagle
console.log(golfScore(4, 3)) //should return the string Birdie
console.log(golfScore(4, 4)) //should return the string Par
console.log(golfScore(1, 1)) //should return the string Hole-in-one!
console.log(golfScore(5, 5)) //should return the string Par
console.log(golfScore(4, 5)) //should return the string Bogey
console.log(golfScore(4, 6)) //should return the string Double Bogey
console.log(golfScore(4, 7)) //should return the string Go Home!
console.log(golfScore(5, 9)) //should return the string Go Home!