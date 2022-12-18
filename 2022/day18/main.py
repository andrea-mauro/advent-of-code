def fill_with_lava(coordinates, x_range, y_range, z_range):
    start = (x_range[0] - 1, y_range[0] - 1, z_range[0] - 1)

    stack = [start]
    visited = set()

    touching_borders = 0
    while len(stack) > 0:
        point = (x, y, z) = stack.pop()
        if point in coordinates \
                or point in visited \
                or x < x_range[0] - 1 or x > x_range[1] + 1 \
                or y < y_range[0] - 1 or y > y_range[1] + 1 \
                or z < z_range[0] - 1 or z > z_range[1] + 1:
            continue
        else:
            visited.add(point)

            border = (x + 1, y, z)
            if border in coordinates:
                touching_borders += 1
            else:
                stack.append(border)
            border = (x - 1, y, z)
            if border in coordinates:
                touching_borders += 1
            else:
                stack.append(border)
            border = (x, y + 1, z)
            if border in coordinates:
                touching_borders += 1
            else:
                stack.append(border)
            border = (x, y - 1, z)
            if border in coordinates:
                touching_borders += 1
            else:
                stack.append(border)
            border = (x, y, z + 1)
            if border in coordinates:
                touching_borders += 1
            else:
                stack.append(border)
            border = (x, y, z - 1)
            if border in coordinates:
                touching_borders += 1
            else:
                stack.append(border)

    return touching_borders


def solve():
    with open('intpu.txt') as file:
        coordinates = set()

        for line in file.read().splitlines():
            coord = tuple([int(i) for i in line.split(',')])

            coordinates.add(coord)

        counter = 0
        x_range = [None, 0]
        y_range = [None, 0]
        z_range = [None, 0]
        for c in coordinates:
            x_range[0] = c[0] if x_range[0] is None else min(c[0], x_range[0])
            y_range[0] = c[1] if y_range[0] is None else min(c[1], y_range[0])
            z_range[0] = c[2] if z_range[0] is None else min(c[2], z_range[0])

            x_range[1] = max(c[0], x_range[1])
            y_range[1] = max(c[1], y_range[1])
            z_range[1] = max(c[2], z_range[1])

            counter += 1 if (c[0], c[1], c[2] + 1) not in coordinates else 0
            counter += 1 if (c[0], c[1], c[2] - 1) not in coordinates else 0
            counter += 1 if (c[0], c[1] + 1, c[2]) not in coordinates else 0
            counter += 1 if (c[0], c[1] - 1, c[2]) not in coordinates else 0
            counter += 1 if (c[0] + 1, c[1], c[2]) not in coordinates else 0
            counter += 1 if (c[0] - 1, c[1], c[2]) not in coordinates else 0

        return counter, fill_with_lava(coordinates, x_range, y_range, z_range)


print(solve())
