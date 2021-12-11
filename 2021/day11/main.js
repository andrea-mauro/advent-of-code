const input = [
    [6, 7, 4, 4, 6, 3, 8, 4, 5, 5],
    [3, 1, 3, 5, 7, 4, 5, 4, 1, 8],
    [4, 7, 5, 4, 1, 2, 3, 2, 7, 1],
    [4, 2, 2, 4, 2, 5, 7, 1, 6, 1],
    [8, 1, 6, 7, 1, 8, 6, 5, 4, 6],
    [2, 2, 6, 8, 5, 7, 7, 6, 7, 4],
    [7, 1, 7, 7, 7, 6, 8, 1, 7, 5],
    [2, 6, 6, 2, 2, 5, 5, 2, 7, 5],
    [4, 6, 5, 5, 3, 4, 3, 3, 7, 6],
    [7, 8, 5, 2, 5, 2, 6, 1, 6, 8],
]

let flashCount = 0
const processStep = (input = []) => {
    let toBeFlashed = []
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            const next = input[i][j] + 1
            input[i][j] = next
            if (next > 9) {
                toBeFlashed.push([i, j])
            }
        }
    }

    flash(input, toBeFlashed)
}

const up = (input = [], i, j, toBeFLashed = []) => {
    if (i >= 0 && i < input.length && j >= 0 && j < input[i].length && input[i][j] !== 0) {
        input[i][j] += 1
        if (input[i][j] > 9) toBeFLashed.push([i, j])
    }
}

const flash = (input = [], toBeFlashed = []) => {
    if (toBeFlashed && toBeFlashed.length !== 0) {
        let [i, j] = toBeFlashed.shift()
        if (input[i][j] !== 0) {
            flashCount++
            input[i][j] = 0

            up(input, i - 1, j - 1, toBeFlashed)
            up(input, i - 1, j, toBeFlashed)
            up(input, i - 1, j + 1, toBeFlashed)
            up(input, i, j - 1, toBeFlashed)
            up(input, i, j + 1, toBeFlashed)
            up(input, i + 1, j - 1, toBeFlashed)
            up(input, i + 1, j, toBeFlashed)
            up(input, i + 1, j + 1, toBeFlashed)

        }

        if (toBeFlashed && toBeFlashed.length !== 0) {
            flash(input, toBeFlashed)
        }
    }
}

const allZeroes = (input = []) => {
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] !== 0) {
                return false
            }
        }
    }
    return true
}

const countStepToSync = (input = []) => {
    let step = 1
    while (!allZeroes(input)) {
        processStep(input)
        if (step % 100 === 0) {
            console.log(`flashes at step ${step}: ${flashCount}`)
        }
        step++
    }
    console.log(`steps to sync: ${step - 1}`)
}

countStepToSync(input)