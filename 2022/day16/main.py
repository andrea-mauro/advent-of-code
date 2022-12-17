from itertools import product


class Valve:
    id: str
    connections: list
    pressure: int
    open: bool

    def __init__(self, id, pressure, connections):
        self.id = id
        self.pressure = pressure
        self.connections = list(connections)
        self.open = False

    def __str__(self):
        return f'id={self.id} pressure={self.pressure} open={self.open} connections={self.connections}'

    def __repr__(self):
        return str(self)

    def __eq__(self, other):
        return self.id == other.id

    def id_state(self):
        return f'{self.id}:{self.open}'

    def __hash__(self):
        return hash(self.id)


def parse_input():
    valves = dict()
    with open('input.txt') as file:
        lines = file.read().splitlines()

        for line in lines:
            id = line[6:8]
            pressure = eval(line.split(';')[0].split('=')[1])
            connections = list(reversed([s.strip() for s in line.split(';')[1][23:].split(',')]))

            valves[id] = Valve(id, pressure, connections)

    return valves


def solve1():
    valves = parse_input()

    start = valves['AA']
    connections = [valves[i] for i in start.connections]
    return max([move_to(m, valves, cumulative_pressure=0, time_remaining=29) for m in connections])


def move_to(v, valves, cumulative_pressure=0, time_remaining=30, cache=dict()):
    key = f'{v.id}#{time_remaining}#{cumulative_pressure}'

    if key in cache:
        return cache[key]

    if time_remaining < 0:
        cache[key] = cumulative_pressure
        return cumulative_pressure

    connections = [valves[i] for i in v.connections]

    max_open = 0
    max_closed = max([move_to(m, valves, cumulative_pressure, time_remaining - 1) for m in connections])

    if not v.open and v.pressure > 0:
        v.open = True
        time_remaining -= 1
        cumulative_pressure += time_remaining * v.pressure
        max_open = max(
            [move_to(m, valves, cumulative_pressure=cumulative_pressure, time_remaining=time_remaining - 1) for m
             in connections])
        v.open = False

    ret = max(max_open, max_closed)
    cache[key] = ret
    return ret


def solve2():
    valves = parse_input()

    start = valves['AA']
    connections = [valves[i] for i in start.connections]
    connections = list(product(connections, connections))

    return max([move_together(m_me, m_el, valves, time_remaining=24) for (m_me, m_el) in connections])


def move_together(v_me, v_el, valves, cumulative_pressure=0, time_remaining=30, cache=dict()):
    key = f'{v_me.id}#{v_el.id}#{time_remaining}'

    if key in cache:
        return cache[key]

    if time_remaining < 0:
        cache[key] = cumulative_pressure
        return cumulative_pressure

    connections_me = [valves[i] for i in v_me.connections]
    connections_el = [valves[i] for i in v_el.connections]
    connections = list(product(connections_me, connections_el))

    max_open_closed = 0
    max_closed_open = 0
    max_open_open = 0
    max_closed_closed = max(
        [move_together(m_me, m_el, valves, cumulative_pressure, time_remaining - 1) for (m_me, m_el) in connections])

    if v_me.id != v_el.id and not v_me.open and v_me.pressure > 0 and not v_el.open and v_el.pressure > 0:
        v_me.open = True
        v_el.open = True
        max_open_open = max(
            [move_together(m_me, m_el, valves,
                           cumulative_pressure + time_remaining * v_me.pressure + time_remaining * v_el.pressure,
                           time_remaining - 2) for (m_me, m_el) in
             connections])
        v_me.open = False
        v_el.open = False

    if not v_me.open and v_me.pressure > 0:
        v_me.open = True
        max_open_closed = max(
            [move_together(v_me, m_el, valves, cumulative_pressure + time_remaining * v_me.pressure, time_remaining - 1)
             for m_el in connections_el])
        v_me.open = False

    if not v_el.open and v_el.pressure > 0:
        v_el.open = True
        max_closed_open = max(
            [move_together(m_me, v_el, valves, cumulative_pressure + time_remaining * v_el.pressure, time_remaining - 1)
             for m_me in connections_me])
        v_el.open = False

    ret = max(max_closed_closed, max_open_closed, max_closed_open, max_open_open)
    cache[key] = ret
    return ret


solve1()
# part 2 takes a lot (like 30 mins) but it works
solve2()
