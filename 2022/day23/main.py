class Elf:
    position: tuple

    def __init__(self, position):
        self.position = position

    def __str__(self):
        return f'{self.position}'

    def __repr__(self):
        return self.__str__()


def parse_input():
    elves = dict()
    with open('input.txt') as file:
        for row, line in enumerate(file.read().splitlines()):
            for col, char in enumerate(line):
                if char == '#':
                    position = (row, col)
                    elves[position] = Elf(position)

    return elves


def all_free(elf, elves):
    return is_free_north(elf, elves) \
        and is_free_south(elf, elves) \
        and is_free_west(elf, elves) \
        and is_free_east(elf, elves)


def is_free(elf, elves, direction):
    if direction == 'N':
        return is_free_north(elf, elves)
    elif direction == 'S':
        return is_free_south(elf, elves)
    elif direction == 'W':
        return is_free_west(elf, elves)
    elif direction == 'E':
        return is_free_east(elf, elves)


def is_free_north(elf, elves):
    row = elf.position[0]
    col = elf.position[1]

    return (row - 1, col) not in elves \
        and (row - 1, col + 1) not in elves \
        and (row - 1, col - 1) not in elves


def is_free_south(elf, elves):
    row = elf.position[0]
    col = elf.position[1]

    return (row + 1, col) not in elves \
        and (row + 1, col + 1) not in elves \
        and (row + 1, col - 1) not in elves


def is_free_west(elf, elves):
    row = elf.position[0]
    col = elf.position[1]

    return (row, col - 1) not in elves \
        and (row + 1, col - 1) not in elves \
        and (row - 1, col - 1) not in elves


def is_free_east(elf, elves):
    row = elf.position[0]
    col = elf.position[1]

    return (row, col + 1) not in elves \
        and (row + 1, col + 1) not in elves \
        and (row - 1, col + 1) not in elves


def get_position(elf, direction):
    row = elf.position[0]
    col = elf.position[1]

    if direction == 'N':
        return row - 1, col
    elif direction == 'S':
        return row + 1, col
    elif direction == 'W':
        return row, col - 1
    elif direction == 'E':
        return row, col + 1


def get_borders(elves):
    min_row = min([elf.position[0] for elf in elves.values()])
    min_col = min([elf.position[1] for elf in elves.values()])
    max_row = max([elf.position[0] for elf in elves.values()])
    max_col = max([elf.position[1] for elf in elves.values()])

    return min_row, max_row, min_col, max_col


def print_elves(elves):
    min_row, max_row, min_col, max_col = get_borders(elves)

    for i in range(min_row, max_row + 1):
        print('')
        for j in range(min_col, max_col + 1):
            print('#' if (i, j) in elves else '.', end='')

    print('')


def solve(limit=None):
    elves = parse_input()
    moves = ['N', 'S', 'W', 'E']

    cycle = 0
    ret = False
    while ret is False and (limit is None or cycle < limit):
        ret = True
        proposed = dict()
        for elf in elves.values():
            if not all_free(elf, elves):
                ret = False
                for i in range(0, 4):
                    direction = moves[(cycle + i) % 4]
                    if is_free(elf, elves, direction):
                        next_pos = get_position(elf, direction)
                        if next_pos not in proposed:
                            proposed[next_pos] = {elf}
                        else:
                            proposed[next_pos].add(elf)
                        break

        for target, candidates in proposed.items():
            if len(candidates) == 1:
                elf = candidates.pop()
                elves.pop(elf.position)
                elf.position = target
                elves[target] = elf

        cycle += 1

    min_row, max_row, min_col, max_col = get_borders(elves)
    total = 0
    for i in range(min_row, max_row + 1):
        for j in range(min_col, max_col + 1):
            total += 0 if (i, j) in elves else 1

    return total, cycle


total, cycle = solve(limit=10)
print(f'first star: empty cells={total} rounds={cycle}')
total, cycle = solve()
print(f'second star: empty cells={total} rounds={cycle}')
