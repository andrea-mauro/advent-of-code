def move_head(knots, direction):
    head = knots[0]
    if direction == 'U':
        head['x'] -= 1
    elif direction == 'D':
        head['x'] += 1
    elif direction == 'L':
        head['y'] -= 1
    elif direction == 'R':
        head['y'] += 1


def move_tails(knots):
    for i in range(1, len(knots)):

        knot_1 = knots[i - 1]
        knot_2 = knots[i]

        if knot_1['x'] == knot_2['x'] and knot_1['y'] - knot_2['y'] == 2:
            knot_2['y'] += 1
        elif knot_1['x'] == knot_2['x'] and knot_1['y'] - knot_2['y'] == -2:
            knot_2['y'] -= 1
        elif knot_1['y'] == knot_2['y'] and knot_1['x'] - knot_2['x'] == 2:
            knot_2['x'] += 1
        elif knot_1['y'] == knot_2['y'] and knot_1['x'] - knot_2['x'] == -2:
            knot_2['x'] -= 1
        elif knot_1['x'] != knot_2['x'] and knot_1['y'] != knot_2['y'] and (
                abs(knot_1['x'] - knot_2['x']) > 1 or abs(knot_1['y'] - knot_2['y']) > 1):
            if knot_2['x'] < knot_1['x'] and knot_2['y'] < knot_1['y']:
                knot_2['x'] += 1
                knot_2['y'] += 1
            elif knot_2['x'] < knot_1['x'] and knot_2['y'] > knot_1['y']:
                knot_2['x'] += 1
                knot_2['y'] -= 1
            elif knot_2['x'] > knot_1['x'] and knot_2['y'] > knot_1['y']:
                knot_2['x'] -= 1
                knot_2['y'] -= 1
            elif knot_2['x'] > knot_1['x'] and knot_2['y'] < knot_1['y']:
                knot_2['x'] -= 1
                knot_2['y'] += 1


def solve(number_of_knots):
    knots = tuple([{'x': 0, 'y': 0} for _ in range(number_of_knots)])

    with open('input.txt') as file:
        lines = file.read().splitlines()

        visited = set()

        for line in lines:
            direction = line[0]
            val = int(line[2:])

            for _ in range(val):
                move_head(knots, direction)
                move_tails(knots)
                last = knots[len(knots) - 1]
                visited.add(str(last))

    return len(visited)


print(solve(2))
print(solve(10))
