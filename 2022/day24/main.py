def parse_input():
    blizzards = dict()
    with open('input.txt') as file:
        lines = file.read().splitlines()
        for row, line in enumerate(lines):
            for col, char in enumerate(line):
                if char != '#' and char != '.':
                    blizzards[(row, col)] = [char]

    return blizzards, row, col


def print_blizards(blizzards, max_row, max_col):
    for i in range(1, max_row):
        print('')
        for j in range(1, max_col):
            if (i, j) not in blizzards:
                print('.', end='')
            else:
                c = blizzards[(i, j)]
                print(len(c) if len(c) > 1 else c[0], end='')
    print('')


def get_next_position(position, direction, max_row, max_col):
    if direction == '>':
        row = position[0]
        col = position[1] + 1
        position = (row, col if col < max_col else 1)
    if direction == '<':
        row = position[0]
        col = position[1] - 1
        position = (row, col if col > 0 else max_col - 1)
    if direction == '^':
        row = position[0] - 1
        col = position[1]
        position = (row if row > 0 else max_row - 1, col)
    if direction == 'v':
        row = position[0] + 1
        col = position[1]
        position = (row if row < max_row else 1, col)

    return position


def move_blizards(blizzards, max_row, max_col):
    ret = dict()
    for position, directions in blizzards.items():
        for direction in directions:
            new_position = get_next_position(position, direction, max_row, max_col)
            if new_position in ret:
                ret[new_position].append(direction)
            else:
                ret[new_position] = [direction]

    return ret


def is_in_borders(position, max_row, max_col):
    row = position[0]
    col = position[1]

    return 0 < row < max_row and 0 < col < max_col


def neighbors(position, end, blizzards, max_row, max_col):
    ret = []

    if position not in blizzards:
        ret.append(position)

    row = position[0] + 1
    col = position[1]
    if (row, col) not in blizzards and (is_in_borders((row, col), max_row, max_col) or (row, col) == end):
        ret.append((row, col))

    row = position[0] - 1
    col = position[1]
    if (row, col) not in blizzards and (is_in_borders((row, col), max_row, max_col) or (row, col) == end):
        ret.append((row, col))

    row = position[0]
    col = position[1] + 1
    if (row, col) not in blizzards and (is_in_borders((row, col), max_row, max_col) or (row, col) == end):
        ret.append((row, col))

    row = position[0]
    col = position[1] - 1
    if (row, col) not in blizzards and (is_in_borders((row, col), max_row, max_col) or (row, col) == end):
        ret.append((row, col))

    return ret


def move(start, end, blizzards, max_row, max_col):
    queue = [(start, 0)]
    cache = set()
    cache.add((start, 0))

    blizzards_map = {0: blizzards}
    for i in range(1, 1000):
        blizzards = move_blizards(blizzards, max_row, max_col)
        blizzards_map[i] = blizzards

    while len(queue) > 0:
        cycle = queue.pop(0)
        position = cycle[0]
        time = cycle[1]

        if position == end:
            return time - 1, blizzards_map[time - 1]

        blizzards = blizzards_map[time]
        for m in neighbors(position, end, blizzards, max_row, max_col):
            el = (m, time + 1)
            if el not in cache:
                cache.add(el)
                queue.append((m, time + 1))


def solve_1():
    blizzards, max_row, max_col = parse_input()
    start = (0, 1)
    end = (max_row, max_col - 1)

    time, blizzards = move(start, end, blizzards, max_row, max_col)
    return time


def solve_2():
    blizzards, max_row, max_col = parse_input()
    start = (0, 1)
    end = (max_row, max_col - 1)

    time1, blizzards = move(start, end, blizzards, max_row, max_col)
    time2, blizzards = move(end, start, blizzards, max_row, max_col)
    time3, blizzards = move(start, end, blizzards, max_row, max_col)

    return time1 + time2 + time3


print('star 1: ', solve_1())
print('star 2: ', solve_2())
