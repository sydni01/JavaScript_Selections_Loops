console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

 for (let i = 1; i <= 100; i++) 
     if (i % 2 == 0){
         console.log(i);
 }

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(i = 1; i <= 100; i++) {
    if (1 % 3 === 0 && i % 5 === 0) {
        console.log("FIZZBUZZ");
    }
    else if (1 % 3 === 0) {
        console.log("FIZZ");
    }
    else if (i % 5 === 0) {
        console.log("BUZZ");
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

do {
    let (i = 1, i <= 100, i++);
     
while ([i % 2 == 0]){
         console.log(i);
 }
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let numberToFind = Math.round(Math.random() * 500); // creates a random number between 0 and 500

let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 1; i <= n; i++) {
    if (i == numberToFind) {
        console.log(`Found ${numberToFind}`);
        break;
    }

if (i == n) {
    console.log(`Did not find ${numberToFind} within 1-${n}..`);
}
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
console.log(start, end);

for (let i = start; i <= end; i++) {
    console.log(i);

    if (i % fizzDivisor == 0) {
        output += "FIZZ";
    }

    else if (i % buzzDivisor == 0) {
        output += "BUZZ";
    }

    console.log(`${i} ${output}`);
}