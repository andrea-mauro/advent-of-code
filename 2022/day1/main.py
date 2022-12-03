#!/usr/bin/env python3
from functools import reduce


def max_calories(accumulator, current):
    calories_sum = reduce(lambda a, b: a + eval(b), current.splitlines(), 0)

    return accumulator if accumulator > calories_sum else calories_sum


def max_three_calories(accumulator, current):
    calories_sum = reduce(lambda a, b: a + eval(b), current.splitlines(), 0)

    if calories_sum > accumulator[0]:
        accumulator.append(calories_sum)
        accumulator.pop(0)
        accumulator.sort()

    return accumulator


with open('input.txt', 'r') as f:
    lines = tuple(f.read().split(sep='\n\n'))
    print(reduce(max_calories, lines, 0))
    print(sum(reduce(max_three_calories, lines, [0, 0, 0])))
