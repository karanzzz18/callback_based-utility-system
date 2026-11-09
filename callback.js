// Task 1: Create processArray function

function processArray(arr, callback) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let value = callback(arr[i]);

        if (value !== undefined) {
            result.push(value);
        }
    }

    return result;
}


// Task 2: Square every number

let numbers = [1, 2, 3, 4];

let square = processArray(numbers, function(n) {
    return n * n;
});

console.log("Square Numbers:", square);


// Task 3: Return only even numbers

let even = processArray(numbers, function(n) {
    if (n % 2 === 0) {
        return n;
    }
});

console.log("Even Numbers:", even);


// Task 4: Create processString function

function processString(str, callback) {
    return callback(str);
}


// Task 5: Convert string to uppercase

let upper = processString("hello world", function(str) {
    return str.toUpperCase();
});

console.log("Uppercase:", upper);


// Task 6: Count words in a sentence

let wordCount = processString("Hello world welcome", function(str) {
    return str.trim().split(/\s+/).length;
});

console.log("Word Count:", wordCount);


// Task 7: Create calculate function

function calculate(a, b, callback) {
    return callback(a, b);
}


// Task 8: Addition, Subtraction, Multiplication, Division

let add = calculate(10, 5, function(a, b) {
    return a + b;
});

console.log("Addition:", add);


let subtract = calculate(10, 5, function(a, b) {
    return a - b;
});

console.log("Subtraction:", subtract);


let multiply = calculate(10, 5, function(a, b) {
    return a * b;
});

console.log("Multiplication:", multiply);


let divide = calculate(10, 5, function(a, b) {
    return a / b;
});

console.log("Division:", divide);


// Task 9: Find first matching element

function findElement(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        }
    }

    return undefined;
}

let firstEven = findElement(numbers, function(n) {
    return n % 2 === 0;
});

console.log("First Even Number:", firstEven);


// Task 10: BONUS CHALLENGE
// Menu-Driven Calculator

function calculator(a, b, choice) {

    if (choice === 1) {
        return calculate(a, b, function(x, y) {
            return x + y;
        });
    }

    else if (choice === 2) {
        return calculate(a, b, function(x, y) {
            return x - y;
        });
    }

    else if (choice === 3) {
        return calculate(a, b, function(x, y) {
            return x * y;
        });
    }

    else if (choice === 4) {
        if (b === 0) {
            return "Cannot divide by zero";
        }

        return calculate(a, b, function(x, y) {
            return x / y;
        });
    }

    else {
        return "Invalid choice";
    }
}


// Display Calculator Menu

console.log("----- Calculator Menu -----");
console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");

let bonusResult = calculator(20, 10, 1);

console.log("Bonus Calculator Result:", bonusResult);


// Array Analysis using Callback

let bonusNumbers = [10, 15, 20, 25, 30];

let bonusEven = processArray(bonusNumbers, function(n) {
    if (n % 2 === 0) {
        return n;
    }
});

console.log("Bonus Even Numbers:", bonusEven);


let bonusSquare = processArray(bonusNumbers, function(n) {
    return n * n;
});

console.log("Bonus Squares:", bonusSquare);