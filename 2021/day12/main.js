const input = [
    'zi-end',
    'XR-start',
    'zk-zi',
    'TS-zk',
    'zw-vl',
    'zk-zw',
    'end-po',
    'ws-zw',
    'TS-ws',
    'po-TS',
    'po-YH',
    'po-xk',
    'zi-ws',
    'zk-end',
    'zi-XR',
    'XR-zk',
    'vl-TS',
    'start-zw',
    'vl-start',
    'XR-zw',
    'XR-vl',
    'XR-ws',
]

const buildMap = (input = []) => {
    return input.reduce((ret, curr) => {
        const start = curr.split('-')[0]
        const end = curr.split('-')[1]
        ret[start] = ret[start] || []
        if (ret[start].indexOf(end) === -1) {
            ret[start].push(end)
        }
        ret[end] = ret[end] || []
        if (ret[end].indexOf(start) === -1) {
            ret[end].push(start)
        }
        return ret
    }, {})
}

const findAllPaths = (input = []) => {
    const all = []
    const map = buildMap(input)
    findPath(map, 'start', ['start'], all)
    return all
}

const canProceed = (array = [], next) => {

    if (next === 'start') return false

    const sorted = array.sort((a, b) => a > b ? 1 : a < b ? -1 : 0)
    let ret = true
    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i].toUpperCase() !== sorted[i] && sorted[i - 1] === sorted[i]) {
            return false
        }
    }
    return ret
}

const findPath = (map, start, current = [], all = []) => {
    if (map[start]) {
        map[start].forEach(next => {
            if (next.toUpperCase() === next || current.indexOf(next) === -1 || canProceed(current, next)) {
                if (next === 'end') {
                    all.push([...current, next])
                } else {
                    findPath(map, next, [...current, next], all)
                }
            }
        })
    }
}

console.log(findAllPaths(input).length)
