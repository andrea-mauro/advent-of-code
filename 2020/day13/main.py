from functools import reduce


def solve_1():
    with open('input.txt') as file:
        lines = file.read().splitlines()

        my_time = int(lines[0])
        min_time = None
        for bus in lines[1].split(','):
            if bus != 'x':
                bus_num = int(bus)
                next_bus_time = my_time + bus_num - (my_time % bus_num)
                if next_bus_time == my_time:
                    return 0
                elif min_time is None or next_bus_time - my_time < min_time[1]:
                    min_time = (bus_num, next_bus_time - my_time)

        return min_time[0] * min_time[1]


def chinese_remainder(m, a):
    sum = 0
    prod = reduce(lambda acc, b: acc * b, m)
    for n_i, a_i in zip(m, a):
        p = prod // n_i
        sum += a_i * mul_inv(p, n_i) * p
    return sum % prod


def mul_inv(a, b):
    b0 = b
    x0, x1 = 0, 1
    if b == 1: return 1
    while a > 1:
        q = a // b
        a, b = b, a % b
        x0, x1 = x1 - q * x0, x0
    if x1 < 0: x1 += b0
    return x1


def solve_2():
    with open('input.txt') as file:
        lines = file.read().splitlines()

        line = lines[1].split(',')

        buses = list()
        for index, bus in enumerate(line):
            if index == 0:
                buses.append((int(bus), 0))
            elif bus != 'x':
                buses.append((int(bus), int(bus) - index))

        return chinese_remainder([i[0] for i in buses], [i[1] for i in buses])


print(solve_1())
print(solve_2())
