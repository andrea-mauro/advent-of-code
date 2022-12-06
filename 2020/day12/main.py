import numpy as np

DIRECTIONS = ('N', 'E', 'S', 'W')
ANGLES = (90, 180, 270)
ROTATIONS_L = {90: np.array([[0, -1], [1, 0]]), 180: np.array([[-1, 0], [0, -1]]), 270: np.array([[0, 1], [-1, 0]])}
ROTATIONS_R = {270: np.array([[0, -1], [1, 0]]), 180: np.array([[-1, 0], [0, -1]]), 90: np.array([[0, 1], [-1, 0]])}


def solve_1():
    with open('input.txt') as file:
        lines = file.readlines()

        facing_dir = DIRECTIONS.index('E')
        east = 0
        north = 0

        for line in lines:
            dir = line[0]
            val = int(line[1:])

            if dir == 'F':
                dir = DIRECTIONS[facing_dir]

            if dir == 'N':
                north += val
            elif dir == 'S':
                north -= val
            elif dir == 'E':
                east += val
            elif dir == 'W':
                east -= val
            elif dir == 'L':
                facing_dir = (facing_dir - ANGLES.index(val) - 1) % 4
            elif dir == 'R':
                facing_dir = (facing_dir + ANGLES.index(val) + 1) % 4

        return abs(east) + abs(north)


def solve_2():
    with open('input.txt') as file:
        lines = file.readlines()

        ship_position = {'E': 0, 'N': 0}
        waypoint_position = {'E': 10, 'N': 1}

        for line in lines:
            dir = line[0]
            val = int(line[1:])

            if dir == 'N':
                waypoint_position['N'] += val
            elif dir == 'S':
                waypoint_position['N'] -= val
            elif dir == 'E':
                waypoint_position['E'] += val
            elif dir == 'W':
                waypoint_position['E'] -= val
            elif dir == 'L':
                rotation = ROTATIONS_L[val].dot([waypoint_position['E'], waypoint_position['N']])
                waypoint_position['E'] = rotation[0]
                waypoint_position['N'] = rotation[1]
            elif dir == 'R':
                rotation = ROTATIONS_R[val].dot([waypoint_position['E'], waypoint_position['N']])
                waypoint_position['E'] = rotation[0]
                waypoint_position['N'] = rotation[1]
            elif dir == 'F':
                ship_position['E'] = ship_position['E'] + waypoint_position['E'] * val
                ship_position['N'] = ship_position['N'] + waypoint_position['N'] * val

        return abs(ship_position['E']) + abs(ship_position['N'])


print(solve_1())
print(solve_2())
