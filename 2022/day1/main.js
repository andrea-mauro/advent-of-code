const fs = require('fs'),
    readline = require('readline');

const rd = readline.createInterface({
    input: fs.createReadStream('input.txt'),
    console: false
});
async function processLines() {

    let max = [0, 0, 0]
    let sum = 0

    for await (const line of rd) {
        if (line === '') {
            if (sum > max[0]) {
                max.push(sum)
                max.splice(0, 1)
                max.sort((a, b) => a - b)
            }
            sum = 0
        } else {
            sum += parseInt(line)
        }
    }

    return max
}

processLines().then(max => {
    console.log(max[2])
    console.log(max.reduce((a, b) => a + b, 0))
})
