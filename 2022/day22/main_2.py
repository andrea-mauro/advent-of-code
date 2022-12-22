import numpy as np

DIRECTIONS = ('R', 'D', 'L', 'U')


class Position:
    square: int
    row: int
    col: int
    direction: str

    def __init__(self, square, row, col, direction):
        self.square = square
        self.row = row
        self.col = col
        self.direction = direction

    def __str__(self):
        return f'({self.square}:[{self.row}, {self.col}] -> {self.direction})'

    def __repr__(self):
        return self.__str__()


def parse_input():
    with open('input.txt') as file:

        square_A = np.zeros((50, 50), dtype=str)
        square_B = np.zeros((50, 50), dtype=str)
        square_C = np.zeros((50, 50), dtype=str)
        square_D = np.zeros((50, 50), dtype=str)
        square_E = np.zeros((50, 50), dtype=str)
        square_F = np.zeros((50, 50), dtype=str)

        lines = file.read().splitlines()

        for row, line in enumerate(lines[0:50]):
            for col in range(0, 50):
                square_A[row, col] = line[col + 50]

            for col in range(0, 50):
                square_B[row, col] = line[col + 100]

        for row, line in enumerate(lines[50:100]):
            for col in range(0, 50):
                square_C[row, col] = line[col + 50]

        for row, line in enumerate(lines[100:150]):
            for col in range(0, 50):
                square_D[row, col] = line[col]

            for col in range(0, 50):
                square_E[row, col] = line[col + 50]

        for row, line in enumerate(lines[150:200]):
            for col in range(0, 50):
                square_F[row, col] = line[col]

        last_line = lines[201]
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

        return (square_A, square_B, square_C, square_D, square_E, square_F), commands


def is_in_borders(pos):
    return 0 <= pos.row < 50 and 0 <= pos.col < 50


def transform(pos):
    square = pos.square
    row = pos.row
    col = pos.col
    direction = pos.direction

    if square == 0 and direction == 'R':
        new_pos = Position(1, row, 0, 'R')
    elif square == 0 and direction == 'L':
        new_pos = Position(3, 49 - row, 0, 'R')
    elif square == 0 and direction == 'D':
        new_pos = Position(2, 0, col, 'D')
    elif square == 0 and direction == 'U':
        new_pos = Position(5, col, 0, 'R')

    elif square == 1 and direction == 'R':
        new_pos = Position(4, 49 - row, 49, 'L')
    elif square == 1 and direction == 'L':
        new_pos = Position(0, row, 49, 'L')
    elif square == 1 and direction == 'D':
        new_pos = Position(2, col, 49, 'L')
    elif square == 1 and direction == 'U':
        new_pos = Position(5, 49, col, 'U')

    elif square == 2 and direction == 'R':
        new_pos = Position(1, 49, row, 'U')
    elif square == 2 and direction == 'L':
        new_pos = Position(3, 0, row, 'D')
    elif square == 2 and direction == 'D':
        new_pos = Position(4, 0, col, 'D')
    elif square == 2 and direction == 'U':
        new_pos = Position(0, 49, col, 'U')

    elif square == 3 and direction == 'R':
        new_pos = Position(4, row, 0, 'R')
    elif square == 3 and direction == 'L':
        new_pos = Position(0, 49 - row, 0, 'R')
    elif square == 3 and direction == 'D':
        new_pos = Position(5, 0, col, 'D')
    elif square == 3 and direction == 'U':
        new_pos = Position(2, col, 0, 'R')

    elif square == 4 and direction == 'R':
        new_pos = Position(1, 49 - row, 49, 'L')
    elif square == 4 and direction == 'L':
        new_pos = Position(3, row, 49, 'L')
    elif square == 4 and direction == 'D':
        new_pos = Position(5, col, 49, 'L')
    elif square == 4 and direction == 'U':
        new_pos = Position(2, 49, col, 'U')

    elif square == 5 and direction == 'R':
        new_pos = Position(4, 49, row, 'U')
    elif square == 5 and direction == 'L':
        new_pos = Position(0, 0, row, 'D')
    elif square == 5 and direction == 'D':
        new_pos = Position(1, 0, col, 'D')
    elif square == 5 and direction == 'U':
        new_pos = Position(3, 49, col, 'U')

    return new_pos


def walk_in_direction(pos, steps, cube):

    ret = pos
    for _ in range(0, steps):
        if ret.direction == 'R':
            next = Position(ret.square, ret.row, ret.col + 1, ret.direction)
        elif ret.direction == 'L':
            next = Position(ret.square, ret.row, ret.col - 1, ret.direction)
        elif ret.direction == 'D':
            next = Position(ret.square, ret.row + 1, ret.col, ret.direction)
        elif ret.direction == 'U':
            next = Position(ret.square, ret.row - 1, ret.col, ret.direction)

        if not is_in_borders(next):
            next = transform(ret)

        if cube[next.square][next.row, next.col] == '#':
            return ret
        else:
            ret = next

    return ret


def change_direction(direction, instr):
    i = DIRECTIONS.index(direction)
    if instr == 'R':
        return DIRECTIONS[(i + 1) % 4]
    if instr == 'L':
        return DIRECTIONS[(i - 1) % 4]


def final_row(pos):
    if pos.square == 0:
        return pos.row
    elif pos.square == 1:
        return pos.row
    elif pos.square == 2:
        return pos.row + 50
    elif pos.square == 3:
        return pos.row + 100
    elif pos.square == 4:
        return pos.row + 100
    elif pos.square == 5:
        return pos.row + 150


def final_col(pos):
    if pos.square == 0:
        return pos.col + 50
    elif pos.square == 1:
        return pos.col + 100
    elif pos.square == 2:
        return pos.col + 50
    elif pos.square == 3:
        return pos.col
    elif pos.square == 4:
        return pos.col + 50
    elif pos.square == 5:
        return pos.col


def walk():
    cube, commands = parse_input()

    pos = Position(0, 0, 0, 'R')
    while len(commands) > 0:
        instr = commands.pop(0)
        if instr == 'R' or instr == 'L':
            pos = Position(pos.square, pos.row, pos.col, change_direction(pos.direction, instr))
        else:
            pos = walk_in_direction(pos, instr, cube)

    return 1000 * (final_row(pos) + 1) + 4 * (final_col(pos) + 1) + DIRECTIONS.index(pos.direction)


print(walk())
