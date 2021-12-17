const input = [[20, 30], [-10, -5]]

const iterate = (x, y, vx, vy, tx = [], ty = [], maxy = 0, step = 1) => {
    if (x >= tx[0] && x <= tx[1] && y >= ty[0] && y <= ty[1]) {
        return maxy
    } else {
        if (step > 1500) {
            return -1
        } else {
            maxy = y + vy > maxy ? y + vy : maxy
            x = x + vx
            y = y + vy
            vx = vx > 0 ? vx - 1 : vx < 0 ? vx + 1 : 0
            vy = vy - 1
            return iterate(x, y, vx, vy, tx, ty, maxy, step + 1)
        }
    }
}

const solve = (input = []) => {
    let max = 0
    let correct = 0
    for (let i = -1000; i < 1000; i++) {
        for (let j = -1000; j < 1000; j++) {
            const result = iterate(0, 0, i, j, input[0], input[1])
            correct += result !== -1 ? 1 : 0
            max = result > max ? result : max
        }
    }
    return {max, correct}
}

console.log(solve([[230, 283], [-107, -57]]))
