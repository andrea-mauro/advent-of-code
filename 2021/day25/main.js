const fs = require('fs')
const readFile = () => {
    const data = fs.readFileSync('./input.txt', 'utf8')

    const output = []
    const lines = data.split('\n')

    for (let i = 0; i < lines.length; i++) {
        output.push([...lines[i]])
    }

    return output
}

const input = readFile()

const free = (str) => {
    return !str || str === '.'
}

const shallowCopy = (array) => {
    let ret = []
    for (let i = 0; i < array.length; i++) {
        ret.push([])
        for (let j = 0; j < array[i].length; j++) {
            ret[i][j] = array[i][j]
        }
    }
    return ret
}

const move = (input) => {
    let next = shallowCopy(input)
    let moves = 0
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            const cucumber = input[i][j]
            if (cucumber === '>') {
                if (j + 1 === input[i].length && free(input[i][0])) {
                    next[i][j] = '.'
                    next[i][0] = '>'
                    moves += 1
                } else if (j + 1 !== input[i].length && free(input[i][j + 1])) {
                    next[i][j] = '.'
                    next[i][j + 1] = '>'
                    moves += 1
                } else {
                    next[i][j] = '>'
                }
            } else if (cucumber === 'v') {
                next[i][j] = 'v'
            }
        }
    }

    input = shallowCopy(next)

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            const cucumber = input[i][j]
            if (cucumber === 'v') {
                if (i + 1 === input.length && free(input[0][j])) {
                    next[i][j] = '.'
                    next[0][j] = 'v'
                    moves += 1
                } else if (i + 1 !== input.length && free(input[i + 1][j])) {
                    next[i][j] = '.'
                    next[i + 1][j] = 'v'
                    moves += 1
                }
            }
        }
    }

    return {array: shallowCopy(next), stop: moves === 0}
}

let stop = false
let array = shallowCopy(input)
let step = 1


while (!stop) {
    const next = move(array)
    array = next.array
    stop = next.stop
    step += 1
}

console.log(`step ${step - 1}`)
