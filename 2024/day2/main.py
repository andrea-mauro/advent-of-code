def main(tolerance=0):
    with open('input.txt', 'r') as file:
        lines = tuple(file.read().splitlines())

        for line in lines:
            levels = list(map(int, line.split(' ')))
            skip_used = 0

            safe = is_safe(levels)

            #if not safe and skip_used < tolerance:
            #    for i in range(1, len(levels)):
            #        if not safe and skip_used < tolerance:
            #            safe = is_safe(levels, i - 1)
            #            if safe:
            #                skip_used += 1

            if safe:
                safe += 1

        print(safe, end='\n')


def is_safe(levels, skip=None):
    order = ''
    for i in range(1, len(levels)):

        if i == skip:
            continue

        if levels[i - 1] < levels[i] and order == '':
            order = 'asc'
        if levels[i - 1] > levels[i] and order == '':
            order = 'desc'

        if levels[i - 1] < levels[i] and order == 'desc':
            return False
        if levels[i - 1] > levels[i] and order == 'asc':
            return False
        if levels[i - 1] == levels[i]:
            return False
        if abs(levels[i - 1] - levels[i]) > 3:
            return False

    return True

print('Part 1: ', end='\n')
main()
print('Part 2: ', end='\n')
main(1)
