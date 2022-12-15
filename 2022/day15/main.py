class Location:
    x: int
    y: int

    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __eq__(self, other):
        self.x == other.x
        self.y == other.y

    def __hash__(self):
        hash((self.x, self.y))

    def manhattan(self, other):
        return abs(self.x - other.x) + abs(self.y - other.y)


class Signal:
    S: Location
    B: Location
    dist: int

    def __init__(self, line):
        Sline = line.split(':')[0]
        Bline = line.split(':')[1]
        Sx = int(Sline[Sline.index('x=') + 2: Sline.index(',')])
        Sy = int(Sline[Sline.index('y=') + 2:])
        Bx = int(Bline[Bline.index('x=') + 2: Bline.index(',')])
        By = int(Bline[Bline.index('y=') + 2:])
        self.S = Location(Sx, Sy)
        self.B = Location(Bx, By)
        self.dist = self.S.manhattan(self.B)


def solve1():
    COL = 10
    signals = list()
    impossible = set()
    bacons = set()

    with open('input.txt') as file:
        for line in file.read().splitlines():
            signals.append(Signal(line))

    intervals = list()
    for signal in signals:
        point = Location(abs(COL - signal.S.y) - signal.dist + signal.S.x,
                         signal.dist - abs(COL - signal.S.y) + signal.S.x)

        if point.x < point.y:
            intervals.append(point)
            impossible.update(range(point.x, point.y + 1))
            if signal.B.y == COL:
                bacons.add(signal.B.x)

    return len(impossible.difference(bacons))


def solve2():
    signals = list()

    with open('input.txt') as file:
        for line in file.read().splitlines():
            signals.append(Signal(line))

    for COL in range(1, 4000000):
        intervals = list()
        for signal in signals:
            point = Location(abs(COL - signal.S.y) - signal.dist + signal.S.x,
                             signal.dist - abs(COL - signal.S.y) + signal.S.x)

            if point.x <= point.y:
                intervals.append((point.x, point.y + 1))

        intervals.sort(key=lambda a: a[0])

        for i in range(1, len(intervals)):
            prev = intervals[i - 1]
            cur = intervals[i]
            if prev[1] + 1 == cur[0]:
                return 4000000 * (cur[0] - 1) + COL


print(solve1())
print(solve2())
