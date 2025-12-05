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

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === '@') {
        const adjacentCount = countAdjacentAtSymbols(grid, row, col);
        if (adjacentCount < 4) {
          count++;
        }
      }
    }
  }

  return count;
}

/**
 * Iteratively removes '@' symbols with less than 4 adjacent '@' symbols
 * until no more such symbols exist, counting the total removed
 * @param {Array<string>} grid - The grid as an array of strings
 * @returns {number} - Total count of '@' symbols removed through all iterations
 */
function iterativelyRemoveAtSymbols(grid) {
  let mutableGrid = grid.map(line => line.split(''));
  let totalRemoved = 0;

  while (true) {
    const positionsToRemove = [];

    for (let row = 0; row < mutableGrid.length; row++) {
      for (let col = 0; col < mutableGrid[0].length; col++) {
        if (mutableGrid[row][col] === '@') {
          const adjacentCount = countAdjacentAtSymbols(
            mutableGrid.map(r => r.join('')),
            row,
            col
          );

          if (adjacentCount < 4) {
            positionsToRemove.push({ row, col });
          }
        }
      }
    }

    if (positionsToRemove.length === 0) {
      break;
    }

    for (const pos of positionsToRemove) {
      mutableGrid[pos.row][pos.col] = '.';
    }

    totalRemoved += positionsToRemove.length;
  }

  return totalRemoved;
}

// Read and process the input file
const inputPath = path.join(__dirname, 'input-1.txt');

try {
  const inputContent = fs.readFileSync(inputPath, 'utf8');
  const lines = inputContent.trim().split('\n').filter(line => line.trim().length > 0);

  // Part 1: Count symbols with less than 4 neighbors (one-time)
  const result = findAtSymbolsWithFewNeighbors(lines);
  console.log(`Part 1: ${result} @ symbols have less than 4 adjacent @ symbols`);

  // Part 2: Iteratively remove symbols and count total
  const totalRemoved = iterativelyRemoveAtSymbols(lines);
  console.log(`Part 2: ${totalRemoved} total @ symbols removed through all iterations`);

} catch (err) {
  console.error('Error reading input file:', err.message);
}

module.exports = { countAdjacentAtSymbols, findAtSymbolsWithFewNeighbors, iterativelyRemoveAtSymbols };

