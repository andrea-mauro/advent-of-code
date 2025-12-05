/**
 * Finds the highest possible two-digit number from a string of digits (1-9)
 * The two digits can be non-consecutive but must preserve order
 * @param {string} digits - String of digits (1-9)
 * @returns {number} - Highest two-digit number possible
 */
function findHighestTwoDigitNumber(digits) {
  if (digits.length < 2) {
    throw new Error('String must have at least 2 digits');
  }

  let maxNumber = 0;

  // For each position i, consider it as the first digit
  for (let i = 0; i < digits.length - 1; i++) {
    const firstDigit = parseInt(digits[i]);

    // Find the maximum digit after position i
    let maxSecondDigit = 0;
    for (let j = i + 1; j < digits.length; j++) {
      const secondDigit = parseInt(digits[j]);
      maxSecondDigit = Math.max(maxSecondDigit, secondDigit);
    }

    // Calculate the two-digit number
    const twoDigitNumber = firstDigit * 10 + maxSecondDigit;
    maxNumber = Math.max(maxNumber, twoDigitNumber);
  }

  return maxNumber;
}

/**
 * Finds the highest possible N-digit number from a string of digits (1-9)
 * The N digits can be non-consecutive but must preserve order
 * @param {string} digits - String of digits (1-9)
 * @param {number} n - Number of digits to extract
 * @returns {string} - Highest N-digit number possible as a string
 */
function findHighestNDigitNumber(digits, n) {
  if (digits.length < n) {
    throw new Error(`String must have at least ${n} digits`);
  }

  let result = [];
  let startPos = 0;

  // For each position in the result, find the best digit
  for (let pos = 0; pos < n; pos++) {
    // Calculate how many positions we need to reserve for remaining digits
    const remainingDigits = n - pos - 1;
    // The latest position we can pick from
    const maxSearchPos = digits.length - remainingDigits - 1;

    let maxDigit = '0';
    let maxDigitPos = startPos;

    // Find the maximum digit in the valid range
    for (let i = startPos; i <= maxSearchPos; i++) {
      if (digits[i] > maxDigit) {
        maxDigit = digits[i];
        maxDigitPos = i;
      }
    }

    result.push(maxDigit);
    startPos = maxDigitPos + 1;
  }

  return result.join('');
}

/**
 * Finds the highest possible 12-digit number from a string of digits (1-9)
 * @param {string} digits - String of digits (1-9)
 * @returns {string} - Highest 12-digit number possible as a string
 */
function findHighest12DigitNumber(digits) {
  return findHighestNDigitNumber(digits, 12);
}

// Read input from file
const fs = require('fs');
const path = require('path');

// Test cases for validation
const testCases = [
  { input: '987654321111111', expected: 98 },
  { input: '811111111111119', expected: 89 },
  { input: '234234234234278', expected: 78 },
  { input: '818181911112111', expected: 92 }
];

console.log('Testing findHighestTwoDigitNumber:\n');
testCases.forEach(({ input, expected }) => {
  const result = findHighestTwoDigitNumber(input);
  const passed = result === expected;
  console.log(`Input: ${input}`);
  console.log(`Expected: ${expected}, Got: ${result} ${passed ? '✓' : '✗'}`);
  console.log('');
});

// Read and process the actual input
const inputPath = path.join(__dirname, 'input-1.txt');
try {
  const inputContent = fs.readFileSync(inputPath, 'utf8').trim();

  if (inputContent) {
    console.log('\n--- Processing input-1.txt ---');
    const lines = inputContent.split('\n');
    let sum2Digit = 0;
    let sum12Digit = 0;

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      if (trimmedLine) {
        const result2 = findHighestTwoDigitNumber(trimmedLine);
        const result12 = findHighest12DigitNumber(trimmedLine);

        console.log(`\nLine ${index + 1}: ${trimmedLine}`);
        console.log(`Highest 2-digit number: ${result2}`);
        console.log(`Highest 12-digit number: ${result12}`);

        sum2Digit += result2;
        sum12Digit += parseInt(result12);
      }
    });

    console.log('\n' + '='.repeat(50));
    console.log(`TOTAL SUM (2-digit): ${sum2Digit}`);
    console.log(`TOTAL SUM (12-digit): ${sum12Digit}`);
    console.log('='.repeat(50));
  } else {
    console.log('\nNote: input-1.txt is empty');
  }
} catch (err) {
  console.error('Error reading input file:', err.message);
}

// Export for use in other modules
module.exports = { findHighestTwoDigitNumber, findHighestNDigitNumber, findHighest12DigitNumber };

