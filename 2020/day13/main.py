def solve():
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


print(solve())
