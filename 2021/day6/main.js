const input = [3, 5, 3, 1, 4, 4, 5, 5, 2, 1, 4, 3, 5, 1, 3, 5, 3, 2, 4, 3, 5, 3, 1, 1, 2, 1, 4, 5, 3, 1, 4, 5, 4, 3, 3, 4, 3, 1, 1, 2, 2, 4, 1, 1, 4, 3, 4, 4, 2, 4, 3, 1, 5, 1, 2, 3, 2, 4, 4, 1, 1, 1, 3, 3, 5, 1, 4, 5, 5, 2, 5, 3, 3, 1, 1, 2, 3, 3, 3, 1, 4, 1, 5, 1, 5, 3, 3, 1, 5, 3, 4, 3, 1, 4, 1, 1, 1, 2, 1, 2, 3, 2, 2, 4, 3, 5, 5, 4, 5, 3, 1, 4, 4, 2, 4, 4, 5, 1, 5, 3, 3, 5, 5, 4, 4, 1, 3, 2, 3, 1, 2, 4, 5, 3, 3, 5, 4, 1, 1, 5, 2, 5, 1, 5, 5, 4, 1, 1, 1, 1, 5, 3, 3, 4, 4, 2, 2, 1, 5, 1, 1, 1, 4, 4, 2, 2, 2, 2, 2, 5, 5, 2, 4, 4, 4, 1, 2, 5, 4, 5, 2, 5, 4, 3, 1, 1, 5, 4, 5, 3, 2, 3, 4, 1, 4, 1, 1, 3, 5, 1, 2, 5, 1, 1, 1, 5, 1, 1, 4, 2, 3, 4, 1, 3, 3, 2, 3, 1, 1, 4, 4, 3, 2, 1, 2, 1, 4, 2, 5, 4, 2, 5, 3, 2, 3, 3, 4, 1, 3, 5, 5, 1, 3, 4, 5, 1, 1, 3, 1, 2, 1, 1, 1, 1, 5, 1, 1, 2, 1, 4, 5, 2, 1, 5, 4, 2, 2, 5, 5, 1, 5, 1, 2, 1, 5, 2, 4, 3, 2, 3, 1, 1, 1, 2, 3, 1, 4, 3, 1, 2, 3, 2, 1, 3, 3, 2, 1, 2, 5, 2]
const input_ = [3, 4, 3, 1, 2]

const simulateGrowthRecursive = (input, depth) => {
    let res = 1
    while (depth > 0) {
        if (input - 1 < 0) {
            input = 6
            res += simulateGrowthRecursive(8, depth - 1)
        } else {
            input -= 1
        }
        depth--
    }
    return res
}

const simulateGrowth = (input = []) => {
    const len = input.length
    const known = {}
    let res = 0
    for (let i = 0; i < len; i++) {
        if (!known[input[i]]) {
            known[input[i]] = simulateGrowthRecursive([input[i]], 256)
        }
        res += known[input[i]]
    }
    return res
}

console.log(simulateGrowth(input))

// days = 80  -> 351092
// days = 256 -> 1595330616005 (it works, but very slow)