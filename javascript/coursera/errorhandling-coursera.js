function addTwoNums(a, b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number');
        } else if(typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number');
        } else {
            console.log(a + b);
        }
    } catch (err) {
        console.log("Error!", err);
    }
}

//addTwoNums(43, "5");
//console.log("Program running!!!");

////
//Defensive Programming
////
function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof(match) == 'string' && match.length == 1;
    if (condition1 && condition2) {
        for(i = 0; i < word.length; i++) {
            if(word[i] == match) {
                console.log('Found the', match, 'at', i);
            } else {
                console.log('---No match found at', i);
            }
        }
    } else {
        console.log("Please pass correct arguments to the function.");
    }
}

// letterFinder("79", "");
// letterFinder("cat", 'a');

try {
    Number(5).toPrecision(300)
} catch(e) {
    console.log("There was an error")
}