/**
* Exercise solved mainly by hand. The following code was only used to test boundaries for the variables
* */

const compiled = [
    (z, w) => {let x = z % 26; z = Math.floor(z / 1); x = (x + 10) !== w ? 1 : 0; let y = (25 * x) + 1; z = z * y; y = (w + 12) * x; return z + y;},
    (z, w) => {let x = z % 26; z = Math.floor(z / 1); x = (x + 12) !== w ? 1 : 0; let y = (25 * x) + 1; z = z * y; y = (w + 7) * x; return z + y ;},
    (z, w) => {let x = z % 26; z = Math.floor(z / 1); x = (x + 10) !== w ? 1 : 0; let y = (25 * x) + 1; z = z * y; y = (w + 8) * x; return z + y ;},
    (z, w) => {let x = z % 26; z = Math.floor(z / 1); x = (x + 12) !== w ? 1 : 0; let y = (25 * x) + 1; z = z * y; y = (w + 8) * x; return z + y ;},
    (z, w) => {let x = z % 26; z = Math.floor(z / 1); x = (x + 11) !== w ? 1 : 0; let y = (25 * x) + 1; z = z * y; y = (w + 15) * x; return z + y ;},
    (z, w) => {let x = z % 26; z = Math.floor(z / 26); x = (x - 16) !== w ? 1 : 0; let y = (25 * x) + 1; z = z * y; y = (w + 12) * x; return z + y ;},
    (z, w) => {let x = z % 26; z = Math.floor(z / 1); x = (x + 10) !== w ? 1 : 0; let y = (25 * x) + 1; z = z * y; y = (w + 8) * x; return z + y;},
    (z, w) => {let x = z % 26; z = Math.floor(z / 26); x = (x - 11) !== w ? 1 : 0; let y = (25 * x) + 1; z = z * y; y = (w + 13) * x; return z + y;},
    (z, w) => {let x = z % 26; z = Math.floor(z / 26); x = (x - 13) !== w ? 1 : 0; let y = (25 * x) + 1; z = z * y; y = (w + 3) * x; return z + y ;},
    (z, w) => {let x = z % 26; z = Math.floor(z / 1); x = (x + 13) !== w ? 1 : 0; let y = (25 * x) + 1; z = z * y; y = (w + 13) * x; return z + y ;},
    (z, w) => {let x = z % 26; z = Math.floor(z / 26); x = (x - 8) !== w ? 1 : 0; let y = (25 * x) + 1; z = z * y; y = (w + 3) * x; return z + y ;},
    (z, w) => {let x = z % 26; z = Math.floor(z / 26); x = (x - 1) !== w ? 1 : 0; let y = (25 * x) + 1; z = z * y; y = (w + 9) * x; return z + y ;},
    (z, w) => {let x = z % 26; z = Math.floor(z / 26); x = (x - 4) !== w ? 1 : 0; let y = (25 * x) + 1; z = z * y; y = (w + 4) * x; return z + y ;},
    (z, w) => {let x = z % 26; z = Math.floor(z / 26); x = (x - 14) !== w ? 1 : 0; let y = (25 * x) + 1; z = z * y; y = (w + 13) * x; return z + y;},
]

const ranges = {
    4: [2, 3, 4, 5, 6, 7, 8, 9],
    6: [4, 5, 6, 7, 8, 9],
    9: [1, 2, 3, 4],
}

const bruteForceIt = (step = 0, z0 = 0, chain = '') => {
    if (step > 13 && z0 === 0) {
        console.log(chain)
        throw Error()
    } else if (step <= 13) {
        if (step === 5) {
            const w = parseInt(chain[chain.length - 1]) - 1
            return bruteForceIt(step + 1, compiled[step](z0, w), `${chain}${w}`)
        } else if (step === 7) {
            const w = parseInt(chain[chain.length - 1]) - 3
            return bruteForceIt(step + 1, compiled[step](z0, w), `${chain}${w}`)
        } else if (step === 10) {
            const w = parseInt(chain[chain.length - 1]) + 5
            return bruteForceIt(step + 1, compiled[step](z0, w), `${chain}${w}`)
        } else if (step === 11) {
            const w = parseInt(chain[chain.length - 1]) - 1
            return bruteForceIt(step + 1, compiled[step](z0, w), `${chain}${w}`)
        } else if (step === 12) {
            const w = parseInt(chain[chain.length - 1]) - 4
            return bruteForceIt(step + 1, compiled[step](z0, w), `${chain}${w}`)
        } else {
            for (let w of ranges[step] || [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
                bruteForceIt(step + 1, compiled[step](z0, w), `${chain}${w}`)
            }
        }
    }
}

bruteForceIt()