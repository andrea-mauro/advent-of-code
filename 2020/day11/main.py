import numpy

ROW_COUNT = 93
COL_COUNT = 97


def count_adjacent_occupied_seat(seat_plan, x, y):
    occupied = 0
    for i in range(max(x - 1, 0), min(x + 2, ROW_COUNT)):
        for j in range(max(y - 1, 0), min(y + 2, COL_COUNT)):
            if i != x or j != y:
                occupied += 1 if seat_plan[i, j] == '#' else 0

    return occupied


def count_visible_occupied_seat(seat_plan, x, y):
    occupied = 0
    for i in reversed(range(0, x)):
        seat = seat_plan[i, y]
        occupied += 1 if seat == '#' else 0
        if seat != '.':
            break

    for i in range(x + 1, ROW_COUNT):
        seat = seat_plan[i, y]
        occupied += 1 if seat == '#' else 0
        if seat != '.':
            break

    for i in reversed(range(0, y)):
        seat = seat_plan[x, i]
        occupied += 1 if seat == '#' else 0
        if seat != '.':
            break

    for i in range(y + 1, COL_COUNT):
        seat = seat_plan[x, i]
        occupied += 1 if seat == '#' else 0
        if seat != '.':
            break

    for i in range(1, max(ROW_COUNT, COL_COUNT)):
        if x - i < 0 or y - i < 0:
            break

        seat = seat_plan[x - i, y - i]
        occupied += 1 if seat == '#' else 0
        if seat != '.':
            break

    for i in range(1, max(ROW_COUNT, COL_COUNT)):
        if x + i >= ROW_COUNT or y + i >= COL_COUNT:
            break

        seat = seat_plan[x + i, y + i]
        occupied += 1 if seat == '#' else 0
        if seat != '.':
            break

    for i in range(1, max(ROW_COUNT, COL_COUNT)):
        if x - i < 0 or y + i >= COL_COUNT:
            break

        seat = seat_plan[x - i, y + i]
        occupied += 1 if seat == '#' else 0
        if seat != '.':
            break

    for i in range(1, max(ROW_COUNT, COL_COUNT)):
        if x + i >= ROW_COUNT or y - i < 0:
            break

        seat = seat_plan[x + i, y - i]
        occupied += 1 if seat == '#' else 0
        if seat != '.':
            break

    return occupied


def init_seat_plan():
    with open('input.txt', 'r') as file:
        seat_plan = numpy.zeros((ROW_COUNT, COL_COUNT), dtype=str)
        lines = tuple(file.read().splitlines())
        for row, line in enumerate(lines):
            for col, char in enumerate(line):
                seat_plan[row, col] = char

    return seat_plan


def solve_1():
    seat_plan = init_seat_plan()

    state_changed = True
    count_occupied = 0
    while state_changed:
        new_seat_plan = numpy.zeros((ROW_COUNT, COL_COUNT), dtype=str)
        state_changed = False
        count_occupied = 0
        count_free = 0
        for row in range(0, ROW_COUNT):
            for col in range(0, COL_COUNT):
                adjacent_occupied = count_adjacent_occupied_seat(seat_plan, row, col)
                if seat_plan[row, col] == 'L' and adjacent_occupied == 0:
                    new_seat_plan[row, col] = '#'
                    count_occupied += 1
                    state_changed = True
                elif seat_plan[row, col] == '#' and adjacent_occupied >= 4:
                    new_seat_plan[row, col] = 'L'
                    count_free += 1
                    state_changed = True
                else:
                    seat = seat_plan[row, col]
                    new_seat_plan[row, col] = seat
                    count_occupied += 1 if seat == '#' else 0
                    count_free += 1 if seat == 'L' else 0

        seat_plan = new_seat_plan

    return count_occupied


def solve_2():
    seat_plan = init_seat_plan()

    state_changed = True
    count_occupied = 0
    while state_changed:
        new_seat_plan = numpy.zeros((ROW_COUNT, COL_COUNT), dtype=str)
        state_changed = False
        count_occupied = 0
        count_free = 0
        for row in range(0, ROW_COUNT):
            for col in range(0, COL_COUNT):
                adjacent_occupied = count_visible_occupied_seat(seat_plan, row, col)
                if seat_plan[row, col] == 'L' and adjacent_occupied == 0:
                    new_seat_plan[row, col] = '#'
                    count_occupied += 1
                    state_changed = True
                elif seat_plan[row, col] == '#' and adjacent_occupied >= 5:
                    new_seat_plan[row, col] = 'L'
                    count_free += 1
                    state_changed = True
                else:
                    seat = seat_plan[row, col]
                    new_seat_plan[row, col] = seat
                    count_occupied += 1 if seat == '#' else 0
                    count_free += 1 if seat == 'L' else 0

        seat_plan = new_seat_plan

    return count_occupied


# print(solve_1())
print(solve_2())
