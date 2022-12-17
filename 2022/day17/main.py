from dataclasses import dataclass
from functools import cmp_to_key


class Point:
    row: int
    col: int

    def __init__(self, row, col):
        self.row = row
        self.col = col

    def __hash__(self):
        return hash(self.row) + hash(self.col)

    def __eq__(self, other):
        return self.col == other.col and self.row == other.row

    def __str__(self):
        return f'({self.row}, {self.col})'

    def __repr__(self):
        return f'({self.row}, {self.col})'


@dataclass
class Shape:
    points: set


class Hline(Shape):
    def __init__(self, row):
        super().__init__(set([Point(row, 2), Point(row, 3), Point(row, 4), Point(row, 5)]))


class Cross(Shape):
    def __init__(self, row):
        super().__init__(
            set([Point(row, 3), Point(row + 1, 2), Point(row + 1, 3), Point(row + 1, 4), Point(row + 2, 3)]))


class El(Shape):
    def __init__(self, row):
        super().__init__(set([Point(row, 2), Point(row, 3), Point(row, 4), Point(row + 1, 4), Point(row + 2, 4)]))


class Vline(Shape):
    def __init__(self, row):
        super().__init__(set([Point(row, 2), Point(row + 1, 2), Point(row + 2, 2), Point(row + 3, 2)]))


class Square(Shape):
    def __init__(self, row):
        super().__init__(set([Point(row, 2), Point(row, 3), Point(row + 1, 2), Point(row + 1, 3)]))


def parse_jets():
    with open('input.txt') as file:
        return [i for i in file.readline().strip()]


def move(shape: Shape, horizontal: int, vertical: int):
    for point in shape.points:
        point.row += vertical
        point.col += horizontal


def move_right(shape):
    move(shape, 1, 0)


def move_left(shape):
    move(shape, -1, 0)


def move_down(shape):
    move(shape, 0, -1)


def move_up(shape):
    move(shape, 0, 1)


def get_highest(points, col=None):
    max_height = 0
    for point in points:
        max_height = max(max_height, point.row + 1) if col is None or point.col == col else max_height

    return max_height


def get_next_shape(start, cycle):
    if cycle % 5 == 0:
        return Hline(start)
    elif cycle % 5 == 1:
        return Cross(start)
    elif cycle % 5 == 2:
        return El(start)
    elif cycle % 5 == 3:
        return Vline(start)
    elif cycle % 5 == 4:
        return Square(start)


def should_revert(shape, rocks):
    if len({(p.row, p.col) for p in rocks}.intersection({(p.row, p.col) for p in shape.points})) > 0:
        return True
    else:
        for point in shape.points:
            if point.row < 0 or point.col < 0 or point.col > 6:
                return True

    return False


def print_it(shape, rocks, limit=(0, 10)):
    combined = {(p.row, p.col) for p in rocks.union(shape.points)}
    for i in reversed(range(limit[0], limit[1])):
        print('')
        print(str(i).rjust(3, ' '), end='')
        for j in range(0, 7):
            print('#' if (i, j) in combined else '.', end='')
    print('\n   0123456')


def has_floor(rocks, col=0, row=None, floor=list()):
    floor.append(row)
    floor.append(row)
    floor.append(row)
    floor.append(row)
    floor.append(row)
    floor.append(row)
    floor.append(row)

    return \
            Point(floor[0], col + 0) in {Point(r.row, r.col) for r in rocks} and \
            Point(floor[1], col + 1) in {Point(r.row, r.col) for r in rocks} and \
            Point(floor[2], col + 2) in {Point(r.row, r.col) for r in rocks} and \
            Point(floor[3], col + 3) in {Point(r.row, r.col) for r in rocks} and \
            Point(floor[4], col + 4) in {Point(r.row, r.col) for r in rocks} and \
            Point(floor[5], col + 5) in {Point(r.row, r.col) for r in rocks} and \
            Point(floor[6], col + 6) in {Point(r.row, r.col) for r in rocks}

    if row is None:
        exit()
        l = list(map(lambda a: a.row, filter(lambda a: a.col == col, rocks)))
        sorted(l)
        row = l[- 1]

    floor.append(row)
    point = Point(row, col)
    if point in {Point(r.row, r.col) for r in rocks} and col == 6:
        return True
    elif point not in {Point(r.row, r.col) for r in rocks}:
        floor.pop()
        return False
    else:
        return \
                has_floor(rocks, col + 1, row + 1, floor) or \
                has_floor(rocks, col + 1, row, floor) or \
                has_floor(rocks, col + 1, row - 1, floor)


def clean(rocks, floor):
    keep = set()
    for r in rocks:
        if r.row >= floor[r.col]:
            keep.add(Point(r.row, r.col))

    return keep


def get_rocks_hash(rocks, base=0):
    l = sorted(list(map(lambda a: Point(a.row - base, a.col), rocks)),
               key=cmp_to_key(lambda a, b: -1 if a.row < b.row else 1 if a.row > b.row else -1 if a.col < b.col else 1))
    return str(l)


def solve1():
    rocks = set()
    jets = parse_jets()
    highest = 0
    highest_0 = 0
    keys = set()

    action_counter = 0
    for cycle in range(0, 2022):
        stop = False
        start = highest + 3
        shape = get_next_shape(start, cycle)
        while not stop:
            key = f'{cycle % 5}#{action_counter % len(jets)}#{get_rocks_hash(rocks, highest_0)}'
            if key in keys:
                print(key)
            keys.add(key)

            action = jets[action_counter % len(jets)]
            action_counter += 1

            move_right(shape) if action == '>' else move_left(shape)

            if should_revert(shape, rocks):
                move_left(shape) if action == '>' else move_right(shape)

            move_down(shape)
            stop = should_revert(shape, rocks)
            if stop:
                move_up(shape)
                rocks = rocks.union(shape.points)
                highest = max(highest, get_highest(shape.points))
                highest_0 = max(highest_0, get_highest(shape.points, 0) - 1)
                floor = list()
                if has_floor(rocks, floor=floor, row=highest_0):
                    rocks = clean(rocks, floor)

    return highest


print(solve1())

'''
part 2 was solved with some investigation:

    The following key was introduced to detect if there is any cycle:
        key = f'{cycle%5}#{action_counter % len(jets)}#{get_rocks_hash(rocks, highest_0)}'
        
    Given that the `rocks` set is cleaned whenever we detect a floor (i.e. a line completely blocked by rocks)
    the key above detects if any configuration repeats across the computation.

    A recurring setup was actually found for
        cycle % 5 = 4
        action_counter % len(jets) = 2031
        rocks = [(0, 0), (0, 1), (0, 2), (0, 3), (0, 4), (0, 5), (0, 6), (1, 4), (2, 3), (2, 4), (2, 5), (3, 1), (3, 2), (3, 3), (3, 4), (4, 3), (5, 3)]
    
    This pattern first appears at `cycle=344` (with height 510) and repeats every 1705 cycles (at 2049, 3754, 5459, ...)
    At every cycle the height grows by 2597.
    
    With this in mind, the following calculation returns the height at the last occurrence of the key:
    
        height = ((1000000000000 - 344)//1705)*2597 + 510 + missing
    
    `missing` is the remaining height from cycle 999999998415 to 1000000000000
    
    To calculate this, the algorithm above was changed to start with cycle, action_counter and rocks = the 
    values in the key and this returned `missing = 1883`, thus
    
        height = ((1000000000000 - 344)//1705)*2597 + 510 + 1883 = 1523167155404
    
'''
