const input = [
    '[1,[[3,6],[0,[6,3]]]]',
    '[[[5,2],[[5,0],6]],[6,[5,1]]]',
    '[[5,[[2,3],[7,1]]],[4,[9,[8,3]]]]',
    '[[8,[[3,4],[8,7]]],[[[4,0],[3,5]],[[0,1],6]]]',
    '[[1,[6,[9,0]]],[[7,[5,7]],[[8,9],3]]]',
    '[[[[6,7],[4,9]],7],9]',
    '[[7,3],[[8,9],[7,[4,2]]]]',
    '[[[4,[2,9]],[0,3]],[[4,[0,8]],[[4,4],3]]]',
    '[[[[6,9],9],8],[[[4,0],[1,6]],[4,[3,6]]]]',
    '[[4,[4,[3,3]]],[[2,1],[[6,1],[9,4]]]]',
    '[[5,[6,7]],[[[5,8],[4,3]],[4,[0,8]]]]',
    '[[6,[[9,6],5]],[0,[6,6]]]',
    '[[[[1,5],9],[[5,3],5]],[[[2,0],3],9]]',
    '[4,3]',
    '[[1,8],[[[1,0],[3,8]],3]]',
    '[[[[2,0],[6,5]],4],[[[9,8],[0,1]],3]]',
    '[[8,[7,8]],[[6,[3,2]],[[8,1],[7,5]]]]',
    '[[[[1,4],2],[[4,8],[3,2]]],[[[2,2],6],6]]',
    '[[[4,[0,5]],[[8,8],[7,2]]],[[4,[4,1]],2]]',
    '[[1,[4,[4,0]]],[2,[[2,3],1]]]',
    '[[[[2,1],0],[[3,4],1]],[[2,4],3]]',
    '[[9,[8,7]],[7,[0,[8,0]]]]',
    '[[[9,9],7],[[0,[2,1]],[[7,1],4]]]',
    '[[6,[[3,2],[0,0]]],[[[4,1],9],[7,3]]]',
    '[[[5,[5,6]],[[7,7],[7,8]]],4]',
    '[[8,[[4,1],4]],[[[6,4],[0,3]],[5,[6,4]]]]',
    '[[[9,0],[2,8]],[[6,5],5]]',
    '[[[3,[1,6]],[[5,3],6]],[[[7,4],[4,9]],[[2,3],[6,5]]]]',
    '[[8,[6,7]],6]',
    '[[[[6,0],[1,3]],[0,0]],[[[4,7],[7,8]],[[7,2],2]]]',
    '[[6,[[9,6],[1,1]]],7]',
    '[[[2,3],[6,0]],[3,[[9,3],9]]]',
    '[[[3,0],0],[[[6,0],3],[[1,5],4]]]',
    '[[8,[[0,3],8]],[[[0,8],[4,3]],[8,[3,4]]]]',
    '[[[4,4],0],[[1,[8,0]],[[9,6],3]]]',
    '[8,[[6,[6,7]],[8,7]]]',
    '[[8,[0,[1,4]]],3]',
    '[[[[9,5],0],[[5,3],[1,9]]],[[[7,3],5],[[4,3],9]]]',
    '[[[[9,0],[4,2]],[0,[3,2]]],1]',
    '[[[6,[4,2]],[[5,5],9]],[[[6,1],9],[[3,8],[8,1]]]]',
    '[[[3,[5,0]],[[5,2],[2,2]]],[[0,2],[7,4]]]',
    '[[3,[[5,7],[2,8]]],4]',
    '[[[4,8],5],0]',
    '[[[6,9],[[7,0],7]],[8,7]]',
    '[[7,[[1,3],[0,2]]],[[[4,8],0],[[7,0],6]]]',
    '[[[1,7],[6,6]],[[6,[4,0]],[0,4]]]',
    '[[[[2,2],[3,9]],9],3]',
    '[0,[[4,9],[[5,5],[5,9]]]]',
    '[[[[4,4],2],[6,4]],[[[4,1],[2,0]],[[9,4],0]]]',
    '[[[0,[3,4]],[2,3]],[[7,[2,3]],[3,3]]]',
    '[[[[0,3],9],7],[7,[4,[9,6]]]]',
    '[[9,[[0,8],4]],[5,[2,[4,9]]]]',
    '[[6,2],[[1,7],0]]',
    '[[[[1,6],[8,3]],1],[[[6,7],2],[[4,4],8]]]',
    '[[[[7,1],[0,3]],0],[5,[4,[8,4]]]]',
    '[[[[4,2],[6,2]],[[5,7],8]],[[7,9],4]]',
    '[[[0,[0,4]],5],2]',
    '[[2,[[0,6],6]],[[[3,4],3],[4,5]]]',
    '[[[[6,4],9],[[7,1],0]],[[[8,2],[3,2]],[[1,9],7]]]',
    '[7,[[7,8],[[5,5],0]]]',
    '[[[1,2],[8,5]],[[5,4],[8,0]]]',
    '[[4,[1,3]],[[[4,5],[1,2]],[5,1]]]',
    '[[[[0,7],[4,5]],[9,[2,2]]],[4,[[1,8],[7,5]]]]',
    '[[4,[[0,4],[8,8]]],[[[9,2],[7,1]],[8,[9,5]]]]',
    '[1,3]',
    '[[[[8,9],5],0],[1,6]]',
    '[[[[6,6],[3,5]],[[2,8],[3,3]]],[[[5,3],[5,9]],[0,[1,4]]]]',
    '[[7,[7,[5,5]]],[4,[4,[9,9]]]]',
    '[[[7,[6,7]],[4,2]],[0,[[7,8],1]]]',
    '[[[[6,0],4],[3,[6,9]]],5]',
    '[[[[9,8],6],[[7,4],[3,4]]],[[[8,8],[2,1]],0]]',
    '[9,[[1,7],[7,1]]]',
    '[6,[[3,[3,6]],[2,9]]]',
    '[[[6,9],[[1,4],2]],[7,3]]',
    '[[1,[6,[8,5]]],[[[0,0],0],[7,2]]]',
    '[[[4,[2,7]],[[0,0],8]],[[4,[4,5]],[[4,8],[3,3]]]]',
    '[[[[7,4],[7,5]],[[5,8],3]],[[[6,9],[0,9]],[[7,2],[4,0]]]]',
    '[4,[4,[9,[5,7]]]]',
    '[[[[8,7],3],[6,[0,5]]],[[[7,8],[5,1]],[[0,4],2]]]',
    '[6,[0,[4,3]]]',
    '[[[[6,5],3],7],[[[0,1],5],[6,[2,6]]]]',
    '[[[9,1],[[8,8],[8,2]]],0]',
    '[[[[3,4],1],3],[8,[[1,5],[5,6]]]]',
    '[[[[6,8],2],4],[[5,8],[[1,5],[7,0]]]]',
    '[[3,8],[[[9,0],2],[7,[5,8]]]]',
    '[[[[7,5],6],[[4,4],[5,0]]],[4,[3,[3,0]]]]',
    '[[[7,9],[1,[8,8]]],[[[6,8],4],4]]',
    '[[4,[[6,7],[5,7]]],[6,7]]',
    '[[[[8,8],[0,4]],[[5,5],1]],6]',
    '[[[7,7],[[5,8],[3,4]]],[[0,[7,4]],5]]',
    '[8,[[1,2],[6,9]]]',
    '[[[[9,5],[0,6]],[2,[8,7]]],[[[9,2],4],6]]',
    '[[[1,[5,2]],5],[[1,0],3]]',
    '[[7,[7,[3,7]]],[[2,6],3]]',
    '[1,[[8,[7,1]],[3,8]]]',
    '[[[[3,2],[5,6]],2],[7,[0,0]]]',
    '[[[7,[4,6]],[9,[7,8]]],9]',
    '[[[[4,3],9],8],[[8,5],6]]',
    '[3,[[3,1],[[8,4],8]]]',
    '[[[9,[3,5]],[[0,9],[8,5]]],5]'
]

const explode = (input) => {
    let open = 0
    let i = 0
    let pair
    while (open !== 5 && i < input.length) {
        if (input[i] === '[') {
            open += 1
        } else if (input[i] === ']') {
            open -= 1
        }

        if (open === 5) {
            pair = findPair(input, i)
            input = addNumberRight(input, pair.rightIndex, pair.rightValue)
            input = replaceWithZero(input, pair.leftIndex, pair.rightIndex)
            input = addNumberLeft(input, pair.leftIndex - 1, pair.leftValue)
            return input
        }
        i += 1
    }
}

const findPair = (input, start) => {
    let left = ''
    let right = ''
    let leftIndex = start
    start += 1
    while (input[start] !== ',') {
        left += input[start++]
    }
    start += 1
    while (input[start] !== ']') {
        right += input[start++]
    }
    return {leftIndex: leftIndex, leftValue: parseInt(left), rightIndex: start, rightValue: parseInt(right)}
}

const addNumberLeft = (input, start, number) => {
    let num
    let init = false
    while (start >= 0) {
        if (!isNaN(parseInt(input[start]))) {
            init = true
            num = input[start] + (num || '')
        } else if (init) {
            break
        }
        start -= 1
    }

    if (num) {
        const newNum = parseInt(num) + number
        return input.substring(0, start + 1) + newNum + input.substring(start + num.length + 1)
    }

    return input
}

const addNumberRight = (input, start, number) => {
    let num
    let init = false
    while (start < input.length) {
        if (!isNaN(parseInt(input[start]))) {
            init = true
            num = (num || '') + input[start]
        } else if (init) {
            break
        }
        start += 1
    }

    if (num) {
        const newNum = parseInt(num) + number

        return input.substring(0, start - num.length) + newNum + input.substring(start)
    }

    return input
}

const replaceWithZero = (input, left, right) => {
    return input.substring(0, left) + '0' + input.substring(right + 1)
}

const split = (input) => {
    let num
    let init
    let start = 0
    let splitted
    while (start < input.length) {
        if (!isNaN(parseInt(input[start]))) {
            init = start
            num = (num || '') + input[start]
        } else if (num) {
            const int = parseInt(num)
            if (int >= 10) {
                splitted = splitNumber(int)
                break
            }
            init = undefined
            num = undefined
        }
        start += 1
    }

    if (splitted) {
        return input.substring(0, init - 1) + `[${splitted[0]}, ${splitted[1]}]` + input.substring(start)
    }

}

const splitNumber = (number) => {
    const left = Math.floor(number / 2)
    const right = number - left
    return [left, right]
}

const reduce = (input) => {
    const expl = explode(input)
    if (!expl) {
        const splt = split(input)
        if (!splt) {
            return input
        } else {
            return reduce(splt)
        }
    } else {
        return reduce(expl)
    }
}

const sum = (list = []) => {
    let res = list[0]
    for (let i = 1; i < list.length; i++) {
        res = reduce(`[${res}, ${list[i]}]`)
    }
    return res
}


const magnitude = (input) => {

    if (typeof input === 'number') {
        return input
    } else {
        return 3 * magnitude(input[0]) + 2 * magnitude(input[1])
    }

}

const findMaxMagniture = (input) => {
    let max = 0
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if (i !== j) {
                const mag = magnitude(eval(reduce(`[${input[i]}, ${input[j]}]`)))
                max = Math.max(max, mag)
            }
        }
    }
    return max
}

console.log(magnitude(eval(sum(input))))
console.log(findMaxMagniture(input))