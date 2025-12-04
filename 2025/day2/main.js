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
 * Check if a number is invalid (made of some sequence repeated at least twice)
 * @param {number} num - The number to check
 * @returns {boolean} - True if the number is invalid
 */
function isInvalidNumberAtLeastTwice(num) {
    const str = num.toString();
    const len = str.length;

    // Try all possible pattern lengths from 1 to len/2
    // Pattern must repeat at least twice, so max pattern length is len/2
    for (let patternLen = 1; patternLen <= Math.floor(len / 2); patternLen++) {
        // Check if the string length is divisible by pattern length
        if (len % patternLen !== 0) {
            continue;
        }

        const pattern = str.substring(0, patternLen);

        // Check if pattern would have leading zero (not allowed)
        if (pattern[0] === '0') {
            continue;
        }

        // Check if the entire string is made of this pattern repeated
        const repetitions = len / patternLen;
        let isValid = true;

        for (let i = 0; i < repetitions; i++) {
            const segment = str.substring(i * patternLen, (i + 1) * patternLen);
            if (segment !== pattern) {
                isValid = false;
                break;
            }
        }

        if (isValid && repetitions >= 2) {
            return true;
        }
    }

    return false;
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
 * Sum invalid numbers (at least twice) in a range [start, end] (inclusive)
 * @param {number} start - Start of range
 * @param {number} end - End of range
 * @returns {number} - Sum of invalid numbers in the range
 */
function sumInvalidInRangeAtLeastTwice(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (isInvalidNumberAtLeastTwice(i)) {
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

/**
 * Parse input file and sum all invalid numbers (at least twice)
 * @param {string} filename - Input file name
 * @returns {number} - Total sum of invalid numbers
 */
function solveAtLeastTwice(filename) {
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
        const sum = sumInvalidInRangeAtLeastTwice(start, end);
        console.log(`Range ${start}-${end}: sum = ${sum}`);
        totalSum += sum;
    }

    return totalSum;
}

// Main execution
const inputFile = './input-1.txt';

console.log('=== Algorithm 1: Sequence repeated exactly twice ===');
const result1 = solve(inputFile);
console.log(`\nTotal sum of invalid numbers: ${result1}`);

console.log('\n=== Algorithm 2: Sequence repeated at least twice ===');
const result2 = solveAtLeastTwice(inputFile);
console.log(`\nTotal sum of invalid numbers: ${result2}`);

