from functools import reduce


def extract_number(line, with_literals=False):
    num_dict = dict()

    add_to_dict(num_dict, line, '1', '1')
    add_to_dict(num_dict, line, '2', '2')
    add_to_dict(num_dict, line, '3', '3')
    add_to_dict(num_dict, line, '4', '4')
    add_to_dict(num_dict, line, '5', '5')
    add_to_dict(num_dict, line, '6', '6')
    add_to_dict(num_dict, line, '7', '7')
    add_to_dict(num_dict, line, '8', '8')
    add_to_dict(num_dict, line, '9', '9')

    if with_literals:
        add_to_dict(num_dict, line, 'one', '1')
        add_to_dict(num_dict, line, 'two', '2')
        add_to_dict(num_dict, line, 'three', '3')
        add_to_dict(num_dict, line, 'four', '4')
        add_to_dict(num_dict, line, 'five', '5')
        add_to_dict(num_dict, line, 'six', '6')
        add_to_dict(num_dict, line, 'seven', '7')
        add_to_dict(num_dict, line, 'eight', '8')
        add_to_dict(num_dict, line, 'nine', '9')

    return int(num_dict[min(num_dict.keys())] + num_dict[max(num_dict.keys())])


def add_to_dict(num_dict, line, lookup_value, number):
    try:
        first_occurrence = line.index(lookup_value)
    except ValueError:
        first_occurrence = -1

    if first_occurrence >= 0:
        num_dict[first_occurrence] = number

    try:
        last_occurrence = line.rindex(lookup_value)
    except ValueError:
        last_occurrence = -1

    if last_occurrence >= 0:
        num_dict[last_occurrence] = number


with open('input.txt', 'r') as f:
    lines = tuple(f.read().split(sep='\n'))

    print('Part 1: ', end='')
    print(reduce(lambda a, b: a + extract_number(b), lines, 0))

    print('Part 2: ', end='')
    print(reduce(lambda a, b: a + extract_number(b, True), lines, 0))