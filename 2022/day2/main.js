const fs = require('fs'),
    readline = require('readline');

const rd = readline.createInterface({
    input: fs.createReadStream('input.txt'),
    console: false
});
async function processLines() {

    let scoreScenario1 = 0
    let scoreScenario2 = 0

    for await (const line of rd) {
        const [first, second] = [line[0], line[2]]
        scoreScenario1 += outcomeScenario1(first, second) + pointScenario1(second)
        scoreScenario2 += outcomeScenario2(second) + pointScenario2(first, second)
    }

    return [scoreScenario1, scoreScenario2]
}

function pointScenario1(a) {
    return a === 'X' ? 1 : a === 'Y' ? 2 : 3
}

function outcomeScenario1(a, b) {
    if ((a === 'A' && b === 'Y') ||
        (a === 'B' && b === 'Z') ||
        (a === 'C' && b === 'X')) {
        return 6
    } else if ((a === 'A' && b === 'X') ||
        (a === 'B' && b === 'Y') ||
        (a === 'C' && b === 'Z')) {
        return 3
    } else {
        return 0
    }
}
function pointScenario2(a, b) {
    if ((a === 'A' && b === 'Y') ||
        (a === 'B' && b === 'X') ||
        (a === 'C' && b === 'Z')) {
        return 1
    } else if ((a === 'A' && b === 'Z') ||
        (a === 'B' && b === 'Y') ||
        (a === 'C' && b === 'X')) {
        return 2
    } else {
        return 3
    }
}

function outcomeScenario2(a) {
    return a === 'X' ? 0 : a === 'Y' ? 3 : 6
}

processLines().then(score => {
    console.log(score[0])
    console.log(score[1])
})
