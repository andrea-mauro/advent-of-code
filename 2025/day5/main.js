const fs = require('fs');

// Read and parse the input file
const input = fs.readFileSync('input-1.txt', 'utf-8').trim();
const [rangesSection, numbersSection] = input.split('\n\n');

// Parse ranges
const ranges = rangesSection.split('\n').map(line => {
    const [start, end] = line.split('-').map(Number);
    return { start, end };
});

// Parse numbers
const numbers = numbersSection.split('\n').map(Number);

// Check if a number is in any range
function isInAnyRange(num, ranges) {
    return ranges.some(range => num >= range.start && num <= range.end);
}

// Count how many numbers are in at least one range
const count = numbers.filter(num => isInAnyRange(num, ranges)).length;

console.log(count);

