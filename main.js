function solveBoard(number = 1, position = [0, 0], board = [
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,],
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,],
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,],
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,],
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,],
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,],
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,],
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,],
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,],
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,],
]) {

    print(board)
    const row = position[0]
    const col = position[1]
    const valid = isValid(position, board)
    if (number === 100 && valid) {
        board[row][col] = number
        return true
    } else if (!valid) {
        return false
    } else {
        board[row][col] = number
        const validPath =
            solveBoard(number + 1, [row, col + 3], board) ||
            solveBoard(number + 1, [row + 3, col], board) ||
            solveBoard(number + 1, [row, col - 3], board) ||
            solveBoard(number + 1, [row - 3, col], board) ||
            solveBoard(number + 1, [row + 2, col + 2], board) ||
            solveBoard(number + 1, [row + 2, col - 2], board) ||
            solveBoard(number + 1, [row - 2, col - 2], board) ||
            solveBoard(number + 1, [row - 2, col + 2], board)
        if (!validPath) {
            board[row][col] = undefined
        }
        return validPath
    }

}

function isValid(position, board) {
    const row = position[0]
    const col = position[1]
    return row <= 9 && row >= 0 && col <= 9 && col >= 0 && board[row][col] === undefined
}

function print(board) {
    let buffer = []
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            buffer.push(' ')
            if (board[i][j] < 10) {
                buffer.push(' ')
            }
            buffer.push(board[i][j] || '..')
        }
        buffer.push('\n')
    }
    console.clear()
    console.log(buffer.join(''))
}

console.log(solveBoard())
