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

// Count distinct integers across all ranges
function countDistinctIntegers(ranges) {
    // Merge overlapping ranges first
    const sortedRanges = [...ranges].sort((a, b) => a.start - b.start);
    const merged = [];

    for (const range of sortedRanges) {
        if (merged.length === 0 || merged[merged.length - 1].end < range.start - 1) {
            // No overlap, add new range
            merged.push({ start: range.start, end: range.end });
        } else {
            // Overlap or adjacent, merge ranges
            merged[merged.length - 1].end = Math.max(merged[merged.length - 1].end, range.end);
        }
    }

    // Count total integers in merged ranges
    return merged.reduce((sum, range) => sum + (range.end - range.start + 1), 0);
}

// Count how many numbers are in at least one range
const count = numbers.filter(num => isInAnyRange(num, ranges)).length;
const distinctCount = countDistinctIntegers(ranges);

console.log(count);
console.log(distinctCount);

