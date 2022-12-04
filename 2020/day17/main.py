import numpy

INPUT = [
    '##...#.#',
    '#..##..#',
    '..#.####',
    '.#..#...',
    '########',
    '######.#',
    '.####..#',
    '.###.#..',
]


def count_active_neighbors_3(matrix, x, y, z):
    active = 0
    for xi in range(-1, 2):
        for yi in range(-1, 2):
            for zi in range(-1, 2):
                active += 0 if xi == 0 and yi == 0 and zi == 0 else matrix[
                    x + xi, y + yi, z + zi]

    return active


def count_active_neighbors_4(matrix, x, y, z, w):
    active = 0
    for xi in range(-1, 2):
        for yi in range(-1, 2):
            for zi in range(-1, 2):
                for wi in range(-1, 2):
                    active += 0 if xi == 0 and yi == 0 and zi == 0 and wi == 0 else matrix[
                        x + xi, y + yi, z + zi, w + wi]

    return active


def count_active_3(config):
    matrix = numpy.zeros((22, 22, 15), dtype=int)
    for row, line in enumerate(config):
        for col, el in enumerate(line):
            matrix[7 + row, 7 + col, 7] = 1 if el == '#' else 0

    count = 0
    for cycle in range(1, 7):
        new_matrix = numpy.zeros((22, 22, 15), dtype=int)
        count = 0
        for z in range(7 - cycle, 7 + cycle + 1):
            for x in range(7 - cycle, 14 + cycle + 1):
                for y in range(7 - cycle, 14 + cycle + 1):
                    new_matrix[x, y, z] = matrix[x, y, z]

                    active_count = count_active_neighbors_3(matrix, x, y, z)
                    if matrix[x, y, z] == 1 and active_count != 2 and active_count != 3:
                        new_matrix[x, y, z] = 0
                    elif matrix[x, y, z] == 0 and active_count == 3:
                        new_matrix[x, y, z] = 1

                    count += new_matrix[x, y, z]

        matrix = new_matrix

    return count


def count_active_4(config):
    matrix = numpy.zeros((22, 22, 15, 15), dtype=int)
    for row, line in enumerate(config):
        for col, el in enumerate(line):
            matrix[7 + row, 7 + col, 7, 7] = 1 if el == '#' else 0

    count = 0
    for cycle in range(1, 7):
        new_matrix = numpy.zeros((22, 22, 15, 15), dtype=int)
        count = 0
        for w in range(7 - cycle, 7 + cycle + 1):
            for z in range(7 - cycle, 7 + cycle + 1):
                for x in range(7 - cycle, 14 + cycle + 1):
                    for y in range(7 - cycle, 14 + cycle + 1):
                        new_matrix[x, y, z, w] = matrix[x, y, z, w]

                        active_count = count_active_neighbors_4(matrix, x, y, z, w)
                        if matrix[x, y, z, w] == 1 and active_count != 2 and active_count != 3:
                            new_matrix[x, y, z, w] = 0
                        elif matrix[x, y, z, w] == 0 and active_count == 3:
                            new_matrix[x, y, z, w] = 1

                        count += new_matrix[x, y, z, w]

        matrix = new_matrix

    return count


print(count_active_3(INPUT))
print(count_active_4(INPUT))
