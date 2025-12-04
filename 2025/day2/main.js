const fs = require('fs');

/**
 * Check if a number is invalid (made of some sequence repeated twice)
 * @param {number} num - The number to check
 * @returns {boolean} - True if the number is invalid
 */
function isInvalidNumber(num) {
    const str = num.toString();
    const len = str.length;

    // A number can only be repeated twice if it has an even length
    if (len % 2 !== 0) {
        return false;
    }

    // Split the string in half and check if both halves are identical
    const mid = len / 2;
    const firstHalf = str.substring(0, mid);
    const secondHalf = str.substring(mid);

    // Check if first half would have leading zero (which is not allowed)
    if (firstHalf[0] === '0') {
        return false;
    }

    return firstHalf === secondHalf;
}

/**
 * Sum invalid numbers in a range [start, end] (inclusive)
 * @param {number} start - Start of range
 * @param {number} end - End of range
 * @returns {number} - Sum of invalid numbers in the range
 */
function sumInvalidInRange(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (isInvalidNumber(i)) {
            sum += i;
        }
    }
    return sum;
}

/**
 * Parse input file and sum all invalid numbers
 * @param {string} filename - Input file name
 * @returns {number} - Total sum of invalid numbers
 */
function solve(filename) {
    // Read and parse the input file
    const input = fs.readFileSync(filename, 'utf-8').trim();

    // Replace newlines with empty string to handle multi-line input
    const cleanedInput = input.replace(/\n/g, '');

    // Split by comma to get individual ranges
    const ranges = cleanedInput.split(',').map(r => r.trim()).filter(r => r.length > 0);

    let totalSum = 0;

    // Process each range
    for (const range of ranges) {
        const [start, end] = range.split('-').map(Number);
        const sum = sumInvalidInRange(start, end);
        console.log(`Range ${start}-${end}: sum = ${sum}`);
        totalSum += sum;
    }

    return totalSum;
}

// Main execution
const inputFile = './input-1.txt';
const result = solve(inputFile);
console.log(`\nTotal sum of invalid numbers: ${result}`);

