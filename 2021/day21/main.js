const playDeterministic = (player1, player2, score1 = 0, score2 = 0, die = 1, move = 0, turn = 0, roll = 1, diceRolled = 1) => {
    die = die % 100
    die = (die === 0 ? 100 : die)
    move = move + die
    if (roll === 3) {
        if (turn === 0) {
            player1 += move
            player1 = player1 % 10
            player1 = player1 === 0 ? 10 : player1
            score1 += player1
        } else {
            player2 += move
            player2 = player2 % 10
            player2 = player2 === 0 ? 10 : player2
            score2 += player2
        }
        move = 0
        roll = 1
        turn = (turn + 1) % 2
    } else {
        roll = roll + 1
    }
    if (score1 < 1000 && score2 < 1000) {
        playDeterministic(player1, player2, score1, score2, die + 1, move, turn, roll, diceRolled + 1)
    } else {
        console.log(`player1 scored ${score1}`)
        console.log(`player2 scored ${score2}`)
        console.log(`dice rolled ${diceRolled} times`)
    }
}

const playDirac = (player1, player2, die, score1 = 0, score2 = 0, move = 0, turn = 0, roll = 1, cache = {}) => {
    const key = `${player1},${player2},${die},${score1},${score2},${move},${turn},${roll}`
    if (cache[key]) {
        return cache[key]
    }
    move = move + die
    if (roll === 3) {
        if (turn === 0) {
            player1 += move
            player1 = player1 % 10
            player1 = player1 === 0 ? 10 : player1
            score1 += player1
        } else {
            player2 += move
            player2 = player2 % 10
            player2 = player2 === 0 ? 10 : player2
            score2 += player2
        }
        move = 0
        roll = 1
        turn = (turn + 1) % 2
    } else {
        roll = roll + 1
    }
    const ret = {
        player1: 0,
        player2: 0,
    }
    if (score1 < 21 && score2 < 21) {
        const universe1 = playDirac(player1, player2, 1, score1, score2, move, turn, roll, cache)
        const universe2 = playDirac(player1, player2, 2, score1, score2, move, turn, roll, cache)
        const universe3 = playDirac(player1, player2, 3, score1, score2, move, turn, roll, cache)

        ret.player1 = universe1.player1 + universe2.player1 + universe3.player1
        ret.player2 = universe1.player2 + universe2.player2 + universe3.player2
    } else {
        if (score1 >= 21) {
            ret.player1 = 1
        } else {
            ret.player2 = 1
        }
    }
    cache[key] = ret
    return ret
}

console.log('*** Deterministic game ***')
playDeterministic(4, 7)

console.log('*** Dirac game***')
const universe1 = playDirac(4, 7, 1)
const universe2 = playDirac(4, 7, 2)
const universe3 = playDirac(4, 7, 3)

console.log(`player1 wins ${universe1.player1 + universe2.player1 + universe3.player1} times`)
console.log(`player2 wins ${universe1.player2 + universe2.player2 + universe3.player2} times`)

