import numpy


def build_waterfall(lines, additional_rows=0):
    row_dim = 0
    col_dim = 0
    col_zero = None
    for line in lines:
        for path in line.split('->'):
            segment = eval(path)

            col_zero = segment[0] if col_zero is None else min(col_zero, segment[0])
            row_dim = max(row_dim, segment[1] + 1)
            col_dim = max(col_dim, segment[0] + 1)

    col_dim = col_dim - col_zero
    row_dim = row_dim + additional_rows

    waterfall = numpy.zeros((row_dim, col_dim), dtype=str)

    for line in lines:
        segments = line.split('->')
        for i in range(1, len(segments)):
            previous = eval(segments[i - 1])
            current = eval(segments[i])

            x2 = current[1]
            x1 = previous[1]
            y1 = current[0] - col_zero
            y2 = previous[0] - col_zero

            waterfall[min(x1, x2): max(x1, x2) + 1, min(y1, y2): max(y1, y2) + 1] = '#'

    return col_zero, waterfall


def get_units(col_zero, waterfall):
    units = 0
    try:
        esc = False
        while esc is False:
            cur = (0, 500 - col_zero)
            rest = False
            while rest is not True:
                next = (cur[0] + 1, cur[1])
                if waterfall[next] in ('#', 'o'):
                    next = (cur[0] + 1, cur[1] - 1)

                    if waterfall[next] in ('#', 'o'):
                        next = (cur[0] + 1, cur[1] + 1)

                        if waterfall[next] in ('#', 'o'):
                            next = tuple(cur)
                            waterfall[next] = 'o'
                            if next == (0, 500 - col_zero):
                                esc = True
                            rest = True

                cur = next
            units += 1
    except:
        print('exception')

    return units


def solve1():
    with open('input.txt') as file:
        (col_zero, waterfall) = build_waterfall(file.read().splitlines())
        units = get_units(col_zero, waterfall)

        print(units)


def solve2():
    with open('input.txt') as file:
        lines = file.read().splitlines()
        lines.append('350,0 -> 3050,0')
        lines.append('700,0 -> 700,0')

        (col_zero, waterfall) = build_waterfall(lines, 2)
        row_dim = len(waterfall[:, 0])
        col_dim = len(waterfall[0, :])
        waterfall[row_dim - 1: row_dim, 0: col_dim] = '#'

        units = get_units(col_zero, waterfall)

        print(units)


solve1()
solve2()
