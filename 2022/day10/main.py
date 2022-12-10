def get_cycles():
    with open('input.txt') as file:
        lines = file.read().splitlines()

        cycles_list = list()
        for i, line in enumerate(lines):
            instr = line.split(' ')[0]
            val = int(line.split(' ')[1]) if instr == 'addx' else 0

            prev = (0, 1) if i == 0 else cycles_list[i - 1]
            if instr == 'addx':
                cycles_list.append(((prev[0] + 2), prev[1] + val))
            else:
                cycles_list.append(((prev[0] + 1), prev[1]))

        cycles = dict()
        for t in cycles_list:
            cycles[t[0]] = t[1]

        return cycles


def get(cycles, cycle_num):
    return cycles.get(cycle_num - 1, cycles.get(cycle_num - 2, 1))


def solve_1():
    cycles = get_cycles()
    return 20 * get(cycles, 20) \
        + 60 * get(cycles, 60) \
        + 100 * get(cycles, 100) \
        + 140 * get(cycles, 140) \
        + 180 * get(cycles, 180) \
        + 220 * get(cycles, 220)


def solve_2():
    cycles = get_cycles()

    for i in range(1, 41):
        x = get(cycles, i)
        if x == i - 2 or x == i - 1 or x == i:
            print('#', end='')
        else:
            print('.', end='')


# print(solve_1())
solve_2()
