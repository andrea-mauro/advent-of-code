const fs = require('fs');

const instructions = fs.readFileSync('/Users/andrea.mauro/Projects/advent-of-code/2025/day1/input-1.txt', 'utf-8').split('\n');

let position = 50;
let zeroCount = 0;
let passThroughZeroCount = 0;
const listSize = 100;

let instructionCount = 0;
for (const instruction of instructions) {
    if (!instruction) continue;

    const direction = instruction.charAt(0);
    const amount = parseInt(instruction.substring(1), 10);

    if (isNaN(amount)) continue;

    const oldPosition = position;

    if (direction === 'R') {
        // Calculate how many times we pass through 0 when moving right
        const newPosition = position + amount;
        const passes = Math.floor(newPosition / listSize);
        passThroughZeroCount += passes;

        position = newPosition % listSize;

        // If we land on 0, count that as a pass-through too (unless we started at 0 OR the floor division already counted it)
        if (position === 0 && oldPosition !== 0 && newPosition % listSize === 0 && passes === 0) {
            passThroughZeroCount++;
        }
    } else if (direction === 'L') {
        // Calculate how many times we pass through 0 when moving left
        let passes = 0;
        if (amount > position) {
            // If we're not starting at 0, we pass through it
            if (oldPosition !== 0) {
                passes = 1 + Math.floor((amount - position) / listSize);
            } else {
                // If we start at 0, count how many times we pass through it after leaving
                passes = Math.floor(amount / listSize);
            }
            passThroughZeroCount += passes;
        }

        position = (position - amount) % listSize;
        if (position < 0) {
            position += listSize;
        }

        // If we land on 0 (and didn't pass through it already), count that as a pass-through too
        if (position === 0 && oldPosition !== 0 && amount <= oldPosition) {
            passThroughZeroCount++;
        }
    }

    if (position === 0) {
        zeroCount++;
    }

    instructionCount++;
}

console.log(`The position is 0 ${zeroCount} times.`);
console.log(`Passed through 0 ${passThroughZeroCount} times.`);

