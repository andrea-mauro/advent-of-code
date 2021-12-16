const input = '620D7B005DF2549DF6D51466E599E2BF1F60016A3F980293FFC16E802B325332544017CC951E3801A19A3C98A7FF5141004A48627F21A400C0C9344EBA4D9345D987A8393D43D000172329802F3F5DE753D56AB76009080350CE3B44810076274468946009E002AD2D9936CF8C4E2C472400732699E531EDDE0A4401F9CB9D7802F339DE253B00CCE77894EC084027D4EFFD006C00D50001098B708A340803118E0CC5C200A1E691E691E78EA719A642D400A913120098216D80292B08104DE598803A3B00465E7B8738812F3DC39C46965F82E60087802335CF4BFE219BA34CEC56C002EB9695BDAE573C1C87F2B49A3380273709D5327A1498C4F6968004EC3007E1844289240086C4D8D5174C01B8271CA2A880473F19F5024A5F1892EF4AA279007332980CA0090252919DEFA52978ED80804CA100622D463860200FC608FB0BC401888B09E2A1005B725FA25580213C392D69F9A1401891CD617EAF4A65F27BC5E6008580233405340D2BBD7B66A60094A2FE004D93F99B0CF5A52FF3994630086609A75B271DA457080307B005A68A6665F3F92E7A17010011966A350C92AA1CBD52A4E996293BEF5CBFC3480085994095007009A6A76DF136194E27CE34980212B0E6B3940B004C0010A8631E20D0803F0F21AC2020085B401694DA4491840D201237C0130004222BC3F8C2200DC7686B14A67432E0063801AC05C3080146005101362E0071010EC403E19801000340A801A002A118012C0200B006AC4015088018000B398019399C2FC432013E3003551006E304108AA000844718B51165F35FA89802F22D3801374CE3C3B2B8B5B7DDC11CC011C0090A6E92BF5226E92BF5327F3FD48750036898CC7DD9A14238DD373C6E70FBCA0096536673DC9C7770D98EE19A67308154B7BB799FC8CE61EE017CFDE2933FBE954C69864D1E5A1BCEC38C0179E5E98280'

const hexToBin = (char) => {
    switch (char) {
        case '0':
            return '0000'
        case '1':
            return '0001'
        case '2':
            return '0010'
        case '3':
            return '0011'
        case '4':
            return '0100'
        case '5':
            return '0101'
        case '6':
            return '0110'
        case '7':
            return '0111'
        case '8':
            return '1000'
        case '9':
            return '1001'
        case 'A':
            return '1010'
        case 'B':
            return '1011'
        case 'C':
            return '1100'
        case 'D':
            return '1101'
        case 'E':
            return '1110'
        case 'F':
            return '1111'
        default:
            return 'XXX'
    }
}

const performOperation = (operation, operands) => {
    switch (operation) {
        case 0:
            return operands.reduce((ret, el) => {
                ret = ret + el
                return ret
            }, 0)
        case 1:
            return operands.reduce((ret, el) => {
                ret = ret * el
                return ret
            }, 1)
        case 2:
            return operands.reduce((ret, el) => {
                ret = Math.min(ret, el)
                return ret
            }, Number.MAX_VALUE)
        case 3:
            return operands.reduce((ret, el) => {
                ret = Math.max(ret, el)
                return ret
            }, 0)
        case 5:
            return operands[0] > operands[1] ? 1 : 0
        case 6:
            return operands[0] < operands[1] ? 1 : 0
        case 7:
            return operands[0] === operands[1] ? 1 : 0

    }
}


const convertToBinary = (input) => {
    let binary = ''
    for (let i = 0; i < input.length; i++) {
        binary += hexToBin(input[i])
    }
    return binary
}

const parseInput = (binary, start = 0) => {
    const id = getId(binary, start)
    let ret
    if (id === 4) {
        ret = parseLiteral(binary, start)
    } else {
        const lengthType = getLengthType(binary, start)
        if (lengthType === 0) {
            ret = parseLengthTypeZero(binary, start)
        } else {
            ret = parseLengthTypeOne(binary, start)
        }
    }
    if (isNaN(ret.version)) throw new Error(binary, start);
    return ret
}

const parseLengthTypeZero = (binary, start) => {
    const lengthOfSubPackets = parseInt(binary.substr(start + 7, 15), 2)
    const id = getId(binary, start)
    let version = getVersion(binary, start)

    let next = start + 22
    let operands = []
    while (next < 22 + start + lengthOfSubPackets) {
        const res = parseInput(binary, next)
        next = res.next
        version += res.version
        operands.push(res.value)
    }
    const value = performOperation(id, operands)
    return {next, version, value}
}

const parseLengthTypeOne = (binary, start) => {
    const numberOfSubPackets = parseInt(binary.substr(start + 7, 11), 2)
    let version = getVersion(binary, start)
    const id = getId(binary, start)

    let next = start + 18
    let operands = []
    for (let i = 0; i < numberOfSubPackets; i++) {
        const res = parseInput(binary, next)
        next = res.next
        version += res.version
        operands.push(res.value)
    }
    const value = performOperation(id, operands)
    return {next, version, value}
}

const parseLiteral = (binary, start) => {
    let next = start + 6
    let number = ''
    let exit = false
    while (!exit) {
        exit = binary[next] === '0'
        const num = binary.substr(next + 1, 4)
        number += num
        next += 5
    }
    if (allZeroes(binary, next)) {
        next = binary.length
    }
    return {next: next, version: getVersion(binary, start), value: parseInt(number, 2)}
}

const allZeroes = (binary, start) => {
    return parseInt(binary.substr(start), 2) === 0
}

const getVersion = (binary, start) => {
    return parseInt(binary.substr(start, 3), 2)
}

const getId = (binary, start) => {
    return parseInt(binary.substr(start + 3, 3), 2)
}

const getLengthType = (binary, start) => {
    return parseInt(binary.substr(start + 6, 3), 2)
}

console.log(parseInput(convertToBinary(input)))