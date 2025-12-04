const fs = require('fs');

const instructions = fs.readFileSync('/Users/andrea.mauro/Projects/advent-of-code/2025/day1/input-1.txt', 'utf-8').split('\n');

let position = 50;
let zeroCount = 0;
const listSize = 100;

for (const instruction of instructions) {
    const direction = instruction.charAt(0);
    const amount = parseInt(instruction.substring(1), 10);

    if (direction === 'R') {
        position = (position + amount) % listSize;
    } else if (direction === 'L') {
        position = (position - amount) % listSize;
        if (position < 0) {
            position += listSize;
        }
    }

    if (position === 0) {
        zeroCount++;
    }
}

console.log(`The position is 0 ${zeroCount} times.`);

