import numpy as np

DIRECTIONS = ('R', 'D', 'L', 'U')


def parse_input():
    with open('input.txt') as file:

        lines = file.read().splitlines()
        dim_row = len(lines) - 2

        dim_col = 0
        for i, line in enumerate(lines):
            if i >= dim_row:
                break

            dim_col = max(dim_col, len(line))

        jungle = np.zeros((dim_row, dim_col), dtype=str)

        for row, line in enumerate(lines):
            for col in range(0, dim_col):
                char = line[col] if col < len(line) else ' '
                if row >= dim_row:
                    break
                jungle[row, col] = char

        last_line = lines[dim_row + 1]
        commands = list()

        s = 0
        e = 0
        while e < len(last_line):
            if last_line[e] == 'R' or last_line[e] == 'L':
                commands.append(int(last_line[s:e]))
                commands.append(last_line[e])
                s = e + 1
                e = e + 1
            else:
                e += 1

        commands.append(int(last_line[s:e]))

        return jungle, commands


def walk_left(pos, steps, jungle, coeff=-1):
    actual_steps = 0
    i = 1
    ret = pos
    while actual_steps < steps:
        next = (pos[0], (pos[1] + coeff * i) % jungle.shape[1])
        tile = jungle[next[0], next[1]]
        if tile == '#':
            return ret
        elif tile != ' ':
            ret = next
            actual_steps += 1
        i += 1

    return ret


def walk_right(pos, steps, jungle):
    return walk_left(pos, steps, jungle, coeff=1)


def walk_up(pos, steps, jungle, coeff=-1):
    actual_steps = 0
    i = 1
    ret = pos
    while actual_steps < steps:
        next = ((pos[0] + coeff * i) % jungle.shape[0], pos[1])
        tile = jungle[next[0], next[1]]
        if tile == '#':
            return ret
        elif tile != ' ':
            ret = next
            actual_steps += 1
        i += 1

    return ret


def walk_down(pos, instr, jungle):
    return walk_up(pos, instr, jungle, coeff=1)


def change_direction(direction, instr):
    i = DIRECTIONS.index(direction)
    if instr == 'R':
        return DIRECTIONS[(i + 1) % 4]
    if instr == 'L':
        return DIRECTIONS[(i - 1) % 4]


def walk():
    jungle, commands = parse_input()

    pos = (0, 0)
    direction = 'R'
    while len(commands) > 0:
        instr = commands.pop(0)

        if instr == 'R' or instr == 'L':
            direction = change_direction(direction, instr)
        elif direction == 'R':
            pos = walk_right(pos, instr, jungle)
        elif direction == 'L':
            pos = walk_left(pos, instr, jungle)
        elif direction == 'U':
            pos = walk_up(pos, instr, jungle)
        elif direction == 'D':
            pos = walk_down(pos, instr, jungle)

    return pos, 1000 * (pos[0] + 1) + 4 * (pos[1] + 1) + DIRECTIONS.index(direction)


print(walk())

'''
forest = np.zeros((1, 10), dtype=str)
forest[0, :] = ' '
forest[0, 3] = '.'
forest[0, 4] = '.'
forest[0, 5] = '.'
forest[0, 6] = '.'
forest[0, 7] = '#'
forest[0, 8] = '.'
print(forest)
print(forest.shape[0])
print(walk_left([0, 6], 5, forest))
'''
