class Test:
    divider: int
    whenTrue: int
    whenFalse: int

    def __init__(self, divider, when_true, when_false):
        self.divider = divider
        self.whenTrue = when_true
        self.whenFalse = when_false


class Operation:
    operator: str
    operand: str

    def __init__(self, operator, operand):
        self.operator = operator
        self.operand = operand

    def eval(self, value):
        old = value
        return eval(str(value) + self.operator + self.operand)


class Monkey:
    id: int
    items: list
    operation: Operation
    test: Test
    inspected: int

    def __init__(self, identifier):
        self.id = identifier
        self.items = list()
        self.operation = Operation(None, None)
        self.test = Test(None, None, None)
        self.inspected = 0

    def __str__(self):
        return f'Monkey {self.id}:\n  Starting items: {self.items}\n  Operation: new = old {self.operation.operator} {self.operation.operand}\n  Test: divisible by {self.test.divider}\n    If true: throw to monkey {self.test.whenTrue}\n    If false: throw to monkey {self.test.whenFalse}'


def parse_input():
    with open('input.txt') as file:
        lines = file.read().splitlines()

        monkeys = list()
        for line in lines:
            if line.startswith('Monkey'):
                current_monkey = Monkey(int(line[7:8]))
                monkeys.append(current_monkey)
            elif line.startswith('  Starting items'):
                current_monkey.items = [int(n) for n in line[17:].strip().split(',')]
            elif line.startswith('  Operation'):
                current_monkey.operation.operator = line[23:24]
                current_monkey.operation.operand = line[25:]
            elif line.startswith('  Test'):
                current_monkey.test.divider = int(line[21:])
            elif line.startswith('    If true: throw to monkey'):
                current_monkey.test.whenTrue = int(line[29:])
            elif line.startswith('    If false: throw to monkey'):
                current_monkey.test.whenFalse = int(line[30:])

    return monkeys


def solve_1():
    monkeys = parse_input()

    for rnd in range(1, 21):
        for monkey in monkeys:
            while len(monkey.items) > 0:
                monkey.inspected += 1
                old = monkey.items.pop(0)
                level = monkey.operation.eval(old)
                level = int(level / 3)
                if level % monkey.test.divider == 0:
                    monkeys[monkey.test.whenTrue].items.append(level)
                else:
                    monkeys[monkey.test.whenFalse].items.append(level)

    monkeys.sort(key=lambda a: a.inspected, reverse=True)

    return monkeys[0].inspected * monkeys[1].inspected


def solve_2():
    monkeys = parse_input()
    cache = build_cache()

    for rnd in range(1, 10001):
        for monkey in monkeys:
            while len(monkey.items) > 0:
                monkey.inspected += 1
                old = monkey.items.pop(0)
                level = monkey.operation.eval(old)
                level = reduce_level(level, cache)
                if level % monkey.test.divider == 0:
                    monkeys[monkey.test.whenTrue].items.append(level)
                else:
                    monkeys[monkey.test.whenFalse].items.append(level)

    monkeys.sort(key=lambda a: a.inspected, reverse=True)

    return monkeys[0].inspected * monkeys[1].inspected


def build_cache():
    cache = {}
    for counter in reversed(range(1, 1000000)):
        temp_rests = (
            counter % 11, counter % 19, counter % 5, counter % 2, counter % 13, counter % 7, counter % 3, counter % 17)
        key = '-'.join((str(n) for n in temp_rests))
        cache[key] = counter

    return cache


def reduce_level(level, cache):
    rests = (level % 11, level % 19, level % 5, level % 2, level % 13, level % 7, level % 3, level % 17)

    key = '-'.join((str(n) for n in rests))
    if cache.get(key) is not None:
        return cache[key]

    cache[key] = level
    return level


print(solve_1())
print(solve_2())
