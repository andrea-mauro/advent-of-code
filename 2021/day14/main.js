const input = [
    'VFHKKOKKCPBONFHNPHPN',
    'VS->B',
    'HK->B',
    'FO->P',
    'NC->F',
    'VN->C',
    'BS->O',
    'HS->K',
    'NS->C',
    'CV->P',
    'NV->C',
    'PH->H',
    'PB->B',
    'PK->K',
    'HF->P',
    'FV->C',
    'NN->H',
    'VO->K',
    'VP->P',
    'BC->B',
    'KK->S',
    'OK->C',
    'PN->H',
    'SB->V',
    'KO->P',
    'KH->C',
    'KS->S',
    'FP->B',
    'PV->B',
    'BO->C',
    'OS->H',
    'NB->S',
    'SP->C',
    'HN->N',
    'FN->B',
    'PO->O',
    'FS->O',
    'NH->B',
    'SO->P',
    'OB->S',
    'KC->C',
    'OO->H',
    'BB->V',
    'SC->F',
    'NP->P',
    'SH->C',
    'BH->O',
    'BP->F',
    'CC->S',
    'BN->H',
    'SS->P',
    'BF->B',
    'VK->P',
    'OV->H',
    'FC->S',
    'VB->S',
    'PF->N',
    'HH->O',
    'HC->V',
    'CH->B',
    'HP->H',
    'FF->H',
    'VF->V',
    'CS->F',
    'KP->F',
    'OP->H',
    'KF->F',
    'PP->V',
    'OC->C',
    'PS->F',
    'ON->H',
    'BK->B',
    'HV->S',
    'CO->K',
    'FH->C',
    'FB->F',
    'OF->V',
    'SN->S',
    'PC->K',
    'NF->F',
    'NK->P',
    'NO->P',
    'CP->P',
    'CK->S',
    'HB->H',
    'BV->C',
    'SF->K',
    'HO->H',
    'OH->B',
    'KV->S',
    'KN->F',
    'SK->K',
    'VH->S',
    'CN->S',
    'VC->P',
    'CB->H',
    'SV->S',
    'VV->P',
    'CF->F',
    'FK->F',
    'KB->V',
]

const solve = (input = [], iterations) => {
    const rules = buildRules(input)
    const start = input[0]
    const map = buildMap(start)

    const newMap = polymerization(input, map, rules, iterations)

    const count = {}
    for (let k in newMap) {
        count[k[0]] = count[k[0]] ? count[k[0]] + newMap[k] : newMap[k]
    }
    count[start[start.length - 1]] += 1

    let min
    let max
    for (let k in count) {
        if (!min || count[k] < min) {
            min = count[k]
        }
        if (!max || count[k] > max) {
            max = count[k]
        }
    }

    return max - min
}

const polymerization = (input = [], map = {}, rules = {}, iterations) => {
    const newMap = {}
    for (let k in map) {
        const val1 = `${k[0]}${rules[k]}`
        const val2 = `${rules[k]}${k[1]}`
        newMap[val1] = newMap[val1] ? newMap[val1] + (map[k] || 1) : (map[k] || 1)
        newMap[val2] = newMap[val2] ? newMap[val2] + (map[k] || 1) : (map[k] || 1)
    }

    if (iterations > 1) {
        return polymerization(input, newMap, rules, iterations - 1)
    } else {
        return newMap
    }
}

const buildRules = (input = []) => {
    return input.reduce((ret, val, index) => {
        if (index !== 0) {
            ret[val.split('->')[0]] = val.split('->')[1]
        }
        return ret
    }, {})
}

const buildMap = (str) => {
    const ret = {}
    for (let i = 1; i < str.length; i++) {
        ret[`${str[i - 1]}${str[i]}`] = ret[`${str[i - 1]}${str[i]}`] ? ret[`${str[i - 1]}${str[i]}`] + 1 : 1
    }
    return ret
}

console.log(solve(input, 10))
console.log(solve(input, 40))