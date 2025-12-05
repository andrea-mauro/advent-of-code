const fs = require('fs');
const path = require('path');

/**
 * Counts the number of '@' symbols in adjacent positions (8 directions)
 * @param {Array<string>} grid - The grid as an array of strings
 * @param {number} row - Row index
 * @param {number} col - Column index
 * @returns {number} - Count of adjacent '@' symbols
 */
function countAdjacentAtSymbols(grid, row, col) {
  const rows = grid.length;
  const cols = grid[0].length;

  // 8 directions: up, down, left, right, and 4 diagonals
  const directions = [
    [-1, 0],  // up
    [1, 0],   // down
    [0, -1],  // left
    [0, 1],   // right
    [-1, -1], // up-left diagonal
    [-1, 1],  // up-right diagonal
    [1, -1],  // down-left diagonal
    [1, 1]    // down-right diagonal
  ];

  let count = 0;

  for (const [dr, dc] of directions) {
    const newRow = row + dr;
    const newCol = col + dc;

    // Check if the position is within bounds
    if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
      if (grid[newRow][newCol] === '@') {
        count++;
      }
    }
  }

  return count;
}

/**
 * Finds all '@' symbols with less than 4 adjacent '@' symbols
 * @param {Array<string>} grid - The grid as an array of strings
 * @returns {number} - Count of '@' symbols with less than 4 adjacent '@' symbols
 */
function findAtSymbolsWithFewNeighbors(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  console.log('Grid dimensions:', rows, 'x', cols);
  console.log('\nAnalyzing each @ symbol:\n');

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === '@') {
        const adjacentCount = countAdjacentAtSymbols(grid, row, col);

        if (adjacentCount < 4) {
          console.log(`Position (${row}, ${col}): ${adjacentCount} adjacent @ symbols ✓`);
          count++;
        }
      }
    }
  }

  return count;
}

// Read and process the input file
const inputPath = path.join(__dirname, 'input-1.txt');

try {
  const inputContent = fs.readFileSync(inputPath, 'utf8');
  const lines = inputContent.trim().split('\n').filter(line => line.trim().length > 0);

  console.log('Input grid:');
  lines.forEach((line, i) => console.log(`${i}: ${line}`));
  console.log('\n' + '='.repeat(50) + '\n');

  const result = findAtSymbolsWithFewNeighbors(lines);

  console.log('\n' + '='.repeat(50));
  console.log(`RESULT: ${result} @ symbols have less than 4 adjacent @ symbols`);
  console.log('='.repeat(50));

} catch (err) {
  console.error('Error reading input file:', err.message);
}

module.exports = { countAdjacentAtSymbols, findAtSymbolsWithFewNeighbors };

