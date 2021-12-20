const input_algo = '##.####..##...##..##.##.###....#..##..#.####.#####..##.#.##.#..#.#####.#.#.....#.####.##.......#.###.#.#..#.##.#.#....####.###..#.####.....##.##.#.#.#.###..#.#..##.####..####...####.#......#...####.#.....##.##.#.#####.#.##...###.#.##.#.#.###.#.####...#####..#.#....######.##.#.###....##...##.#####..##.#.###....#...#...#.#.###.#...##..##........###.#####.###.##....#.##.##..###..#.####....##...###.#####.##..#...###.######.#..#.#...##..#.#####.###.#...#....#.##.#.#.#..#...#####.#..###..#.#...#.#.###.#.#..###.#.'
const input_image = [
'..#.####..###.#.###.##..#...##.#.#..###........#.##...##.#.#...########.#.##...#..##.#.##..##...#.##',
'#####....#..#.#.#...#.#.#..###.##...#.##.#.#...#.#.##.##.......#....#..###.##..#####..#.#.....###..#',
'.#.##..#.....#.#.#.#.##.#.#....###.####.#.##...#..##..#.#..#.#####....#.#...##.##...#..#.##...##...#',
'##...####....#...##..##.#..##..####.###.#....#.#.......##..#....#.##..##..##.#..##.#..##.###.#..###.',
'...##.#..#..##..#.#..#.#.####.....#..###......#..#.#.###..##.....#.##.#.#..##...##.......##...#..#.#',
'..#..##.....#.....#...######.#..#.#.#.#.###.##.#...####.#...#.#.#..###..##.#...##.#.#.#.#.#.......##',
'#.#....#.#.###.##.####..#..####.###...#..##.#.####.####..######......###...##.#.####..###..#.####..#',
'.##...##..##.#..#.#......##.#.#######.##.#.########.##..#.##.#.#.##...#..#.####.#....##..###..###...',
'##......##....#.##............#..###....#.###.###.###.#.###.###..##.#...#.##...######.##.##....#.#.#',
'..#.#.#.##.###.#...###.##.##.##.#.#..####.##...####.#.##.#.#..#.##.###..####..##..##.#.###.###.#.##.',
'.###....#########.##..###.##.#..####...###.###....#.#..#...######...##..#######.##.##....####.....#.',
'#.....##.##..##......####..#......#.###.#..#..##.##.#..#......##.##...##.#####.#.#..#.####.##.#.#.#.',
'...#.#..##..##.##....##....###.#.#####.#.#..##...#...#.#..#.#.#.#.##.#...####.###.#.####.###.....#..',
'.###.###.#####..####..#....#.####...##..##.......##....#...#..#.##.#.#...##.....##.##....####..#....',
'.#...#...##..##..#.##.....#######..#########..##....#.####....#.###...##.##..##..#...###..#.###.#...',
'..#.##..##.#.#.#...#..........##..#...#...##....#..###..##.....#.#..#.#..####.....####..##.#..###...',
'.##.#.###..###.#..##.#.####...#.#..#....#...#.####..##.#.#..#..##.#....###.#.##.#....##.##.##..#..##',
'#####..##.#####..#####..##.#.##.#.#..#...#.#.###...##....###..#.#.....#.......###..###..##.#..#.....',
'##....#..#....#.........####.##.###..#.#.###..####...###...#.#..####....###.#.#...#...#..######.##..',
'..##.###...#.##......#.##......#.......#..##.#.##..###..###.##.#.#.#.#.....#.#..#...#.##.......#.#.#',
'#.#..#..####..##.....##..##.....######.#...#....####...#..#..##......#...##.###..#...#...##..#.##..#',
'..###..#.###.....#.#.#.##....##...###..#.#.#..#.##..........#.#.###.#.##...#...#.#.####....#..###..#',
'..##....#....##.##..#.#.###..####.##.#..#..#.#...#.###.#.#..#.###...##.##.##...##.####..##..###.....',
'##..##.###.#.##..####....##.##.##.#....##.##...##.#....##.###.#.#..##.#.#.#####..##.###.#.#...#..#..',
'....#.#..####.....#...#.##....#####.##...#..#..#.#.##...#.##...##....#.##.###..###....#...#.##...#..',
'#.....##.#..#######.#.#.####.##.#..#####.##.....####..#..###.....#.#..#..##..########..#.#.#..##.#..',
'#....#####.#.#.#.####.#..##..##.#.#..#..#........##.####..#.###.#..####..##.....#.#.###.##.#.....#..',
'...##...######..####.#....#..#..###..#.#...##.##..#####.#.###.##..###.#.####.##.#.#.##...##....#.###',
'..###..#.##...#..#..#####.#..###...####...###.#.#.####....#####.#...#...#.#...#..#...##....#..##....',
'#..#....#.#.##..#..##...#####.#####.#.#.#...#.#####.#...#####.##.#..#...##..#....#.##.#.###...##.#.#',
'##.#........##.###..##.#.#.#..#.#...#....#...#..####.#####...#####..###.###.##.....#....##.###..#.##',
'#.##..###.###.###.##.....#.##.#...#.#.###....##...##.#..#.##.###.####.#####..##..#....#..#.####.#..#',
'#.###.#######.######.#.........#....###..#.#..#..#.####.###.##.#.#..#.##.#.#.######..#.##...##...#..',
'##...###.##.##.#####..#.###.#..####..#####....##.###..#.#..###...###..##.#....###.###.#.#####.###..#',
'###..###..##..##.##.##..####.#..###.##..#.##.######...##..#...#...####....###...#.#...#.#..#.#.#..##',
'##..##..###....##............###.....#...##.#..#.###.#...#...#######...#...##.#...#..#.######.#.#.#.',
'...###.##.###...#...#.....#..####.##..#...###.##..#...#.#.....##.####.....######..####...#.#.###.###',
'.###.#..#####...##...##...#..##.###.#......#.#####.#.#....#.##.##.#.#..##..#...#....#####..#.#..##.#',
'#..###....#..#.#.###.#...#.#.##.#..#..##.###.....##...##.###.##.....#.#.#..#..###.###.##..###.##.##.',
'###...##.###..#.#..#......##.#.###.###..###...###...##...#.#.#..#....##..##..#..#...##..##.........#',
'..#.#.......#.##..###...#...#.#.#.#####..###.######.......#....##.#######...#.######.....#.#...#..#.',
'.#..##.##..#.#...######....##.###.##....#...##.####.####...#..#.###..#####..##.#.#####...#####..##..',
'.#..##..#.#...#..###..####..#.####.##.#.##.###...###.....####.##.....#.#####.##..##..#.##.#.#.#...#.',
'....####.##.###.#...###.#..#...#####.##.##.##...#...#.....#..##..#.####.#..##..#...###..#.#.##.#....',
'.#..#...#.#..##....#..##.##..#.#..#...#...####.##.#...#..#####....#..#.#.###.....##...####.#..####.#',
'#.##.###....#.#.##.#...#.##########....######.#.#.##..##.#...#.#...#..####.####.####.........#.#..##',
'##..###.####.###.....##.###....##.#.#.....#.......####.#....##...##.#.....#...##....###..#....#.##.#',
'##...##.#.#.#.#..#..#.#.........##...##.####..###.#####.#..###.#..##.##...#..#..##.#...###.#....###.',
'...#.#.#.####.##.#.##...####.#.#####..##.#...#...#...##...#......##...####...####.#####.###.##.####.',
'##...#..#.#.####..#..####..######.##.#.##.#.######..#.#..#...#.##.##.##.......###...#.##.#...#.###.#',
'#.####..##..#.####..#####.##.###.##..######.###..##.#.##.#.##.#..##.#.##.#..###..##.##.####.##.###.#',
'###.#####.###...####.#.#..##.#..#.#.###.##.#.#.####..####.###......##.....#.###.#..#..#######..####.',
'.#.#.#..####....##.....##..#####.###.##..###.##.#..###...####.#......#.##.###.#.#.####....####.##...',
'##..#.##.###..##..######.#.#.#...######.#...#####....####......#..##..##..###.#####.###..#....#..#.#',
'#.###....#..###........#.....#.##.#.##.#..##....############....#.###...#.#....#.#..#.#.#########...',
'.....#.#.#.#.#.#..#.#.##..###..#.#..##.#.##.#.###...#..#..########.........###...#####.####..##..###',
'#..#...#####..#.#....###......#.##..#....#.#.#...##.##.######.......#####..#....##..##..#...#...#..#',
'..###.##.#..##..##.#.#....##.##.###.#...##....#..#.#.#..........#########...#.####...#.#####....###.',
'#.####.#####.#.....##.#...#......##...#.#...#.##..#####.#...##...###..#..##.##...##.#...#....#..##.#',
'..#..######..##.##.#..##.#.....######.##..#.##.#.#..#....###...###..###..#.#.....##.##...##.###....#',
'#..#.####..#.##.#.#.#.#.#....##....#...#...#.....#.#..#...####.########..#.##.#.##.##.##.##..#####.#',
'###......#..#....###......##.##..#...##...#.#.##.##..######..###.#.#....##..#####.#.#...##.#...###.#',
'#.######.##.#.#...#.#..#....######.....#..#####.##..####.##..###.#.#..####.###....#..#..#####..#..##',
'....#.###....##.#.###.#..#.##...#.##.##..##..###.#..##.######.##....#..##.#...####.#....#.###..###.#',
'.###...#..######...#..###.####..#...###.###..###.....#...##.#.###.##...###.##.#..#..#.##....#######.',
'.#..#..#..#######.#..#.#..#..#.#...#.##..#..##....#...#.#...####..#.#.####.....###...#..#..##...#...',
'.#..###.#.#..#.......#.####...#.####..##.#.#.###..#.##..#.##.##.#..####...#....#.....######.....#...',
'.#.#.###...#...##..##..##.##.#.....#.....####..##......##...#....#.###.######....#.#....#.#.##....#.',
'.##.#..#.######...###..##........###.#..#..#.##.#.##.#########.#...#####....#.###..#.#.#.....#....#.',
'#..##.###.##.#........##.#..##.....##....####.#..###.##.##..#.##.#.####..####..#.####.##.##.#.#..##.',
'#.#...##....#.#.#.......###...#.####..#.##..#####...###.#....####.....#....#...#..#####.##...####.#.',
'####.########..#.#......###.###.#.###.###..##.###...#.##.....###.###..#.....#..##.#.#....#..#.##.###',
'.###....##......##.#...##......##.#.#.#.#....#.######.##.####...##.#.##.####....##.#...###...#..#.##',
'.######.....##...#.##.#.###.....######.##.####..##.##.###.#...##.##.#.#..#######.#...#.#..#.#.#..###',
'...#...###...#..#.#..###......####...#.##.##..#.##..#..#....###.##....#....#.#..#.....##......#..#.#',
'#..#.#.##..###..####..#.#####.#...##..#.##.#.#...#.#.#.##.#####.#.#####..#.####.##..#.###.#.......##',
'##.#...#..#...##.#.#.##.##..##...###.##..###....####.##.##....##..#.#.##...##..#..#####.##.#......#.',
'.#####..#...#.....#.##...###...##.##..##.##.##.##...##.##.###..#..##.###.#..####.......#.#..###.....',
'###.###.#.#.###.##..####.##....#.##.#####.#..##...###..#..#.##..##..##.##..#.###..##.#..###......#..',
'#.##....#..###..##.#.##..#...#####.##.#..####..#.#.#....###.###....####............#.#..#..####.####',
'##..####.....#..###.#..##.##.####..##.#.#.#.###..##..#.##.###.#....###..###..#.....######..###.####.',
'##..####.#.#...#.#...#.#.##...#.#...#.##....#.#...#.#....###...#.#....###....##.#.#.###...##.####.##',
'#####...####.###..##.#.##.....###..####.#...##.####..#...##.##...#.###....###.#...###.##....##.####.',
'#..##..##...#....###.##.####........###.###..#.##.....#####..##...##.#.#.#....#.#..#....#.#.#.#..#..',
'##..##..###.########...#.#####......###.##...##.##..#......###...####..#.##.##....##....#...#.####.#',
'.##.####.#.##.##.##.##.###......##...#..##.#.#.##..##.#..##...#.#.#..##....#####.#.####...#.##.#.#.#',
'#.#..#..#......#######..##.####..#..#####...#....####.#..#.#.#.####.#.....########..#.#...####.##...',
'#.##..#####....#..#..###.###.##...##...#....#..#.##...#.#..#....#..#..##.....##......#....#..#.....#',
'.##..##.#.#.#.#.###.#..#...##.....#.##.#.#.....##.###......#..####...#####.#.###..##...#...#.#...#.#',
'#....##.##.#.#.###..#......#....#..#.#.#......#....##.####.##.#######.##..##.#..###.#.##.###...###.#',
'#.#...#.#.####..#...####..######.####...##...#.....###.##.####......#.##..#.##..#.##....##...###...#',
'.#####..#.###.###.###.##..##.###..##..#.....#...#..#..#####..##..##....###.##..######.##...##.##..##',
'#.##.....##.####.##.##.##..###.#..#..#.#...###.....#..#.##.######...#.##..#...#..#..#.#.###...#.....',
'#..#.#.#...###.#.####.#.#.#######.######...##.####.#..#..###.#.####.#...#.###.####.....####...#...##',
'##.....#.##......#......####....#.#.#.###...#....#.....####.#.#...#.##..#....#.#..##..#..##.##...#..',
'.#.##...####.#..#.#...#.#...#.#....#.#..#..#.#..##.#.#..##.##.#.####.#.###..#######....###..####....',
'####.##.#######.##.####..#.#...##..#.#...##.#.#...##.##....#.#...###.#.#..##...##..##...#..##...#.#.',
'#....#..#....#......#..#..##.#....##.#.#.#....###..####.##.#.#.#...#...#####....#..###.######.#..###',
'#.##...#.###.###.#.#.####..##..#....##..#.##.###..##.#...#.##.....###...###.#...#..#.##.##....######',
'#..#..####.##.###.....#.#.......##.....#.##.#######...###..#.###.#.####.####..#.#.#...#.##.##...####']

const enancheImage = (image, algorithm, iteration) => {
    const enanched = []
    for (let i = 0; i < image.length + 2; i++) {
        enanched[i] = ''
        for (let j = 0; j < image[0].length + 2; j++) {
            let pixels = getPixelsAround(image, i - 1, j - 1, algorithm[0], iteration)
            let binary
            binary = pixels.replace(/#/g, '1');
            binary = binary.replace(/\./g, '0');
            const index = parseInt(binary, 2)
            enanched[i] += algorithm[index]
        }
    }

    return enanched
}

const getPixelsAround = (image, i, j, zero, iteration) => {
    let ret = ''
    const def = iteration % 2 === 0 ? zero : '.'
    ret += image[i - 1] ? image[i - 1][j - 1] || def : def
    ret += image[i - 1] ? image[i - 1][j] || def : def
    ret += image[i - 1] ? image[i - 1][j + 1] || def : def
    ret += image[i] ? image[i][j - 1] || def : def
    ret += image[i] ? image[i][j] || def : def
    ret += image[i] ? image[i][j + 1] || def : def
    ret += image[i + 1] ? image[i + 1][j - 1] || def : def
    ret += image[i + 1] ? image[i + 1][j] || def : def
    ret += image[i + 1] ? image[i + 1][j + 1] || def : def
    return ret
}

const countLit = (image) => {
    let count = 0
    for (let i = 0; i < image.length; i++) {
        for (let j = 0; j < image[0].length; j++) {
            count += image[i][j] === '#' ? 1 : 0
        }
    }
    return count

}

let image = input_image
for (let i = 0; i < 50; i++) {
    image = enancheImage(image, input_algo, i + 1)
}
console.log(countLit(image))
