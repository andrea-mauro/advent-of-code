const fs = require('fs')

function findDuplicate(itemListString) {

    const itemList = itemListString.split('')

    const len = itemList.length/2
    const first = new Set(itemListString.substring(0, len).split(''))

    return itemListString.substring(len).split('').filter(el => first.has(el))[0]
}

function findGroupBadge(itemListString1, itemListString2, itemListString3) {

    const first = new Set(itemListString1.split(''))
    const second = new Set(itemListString2.split(''))

    return itemListString3.split('').filter(el => first.has(el) && second.has(el))[0]

}

function calculatePriority(item) {
    if (!item) {
        return 0
    }

    if (item === item.toLowerCase()) {
        return item.charCodeAt(0) - 96
    }

    if (item === item.toUpperCase()) {
        return item.charCodeAt(0) - 38
    }
}

function sumDuplicatePriorities(input) {
    return input.reduce((acc, el) => {
        return acc + calculatePriority(findDuplicate(el))
    }, 0)
}

function sumBadgesPriorities(input) {
    let sum = 0
    for (let i = 0; i <= input.length - 3; i = i + 3) {
        sum = sum + calculatePriority(findGroupBadge(input[i], input[i+1], input[i+2]))
    }
    return sum
}

const input = fs.readFileSync('input.txt', 'utf-8').split('\n')

console.log(sumDuplicatePriorities(input))
console.log(sumBadgesPriorities(input))
