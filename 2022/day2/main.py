#!/usr/bin/env python3
from functools import reduce


def outcome_scenario_1(a, b):
    if (a == 'A' and b == 'Y') or (a == 'B' and b == 'Z') or (a == 'C' and b == 'X'):
        return 6
    elif (a == 'A' and b == 'X') or (a == 'B' and b == 'Y') or (a == 'C' and b == 'Z'):
        return 3
    else:
        return 0


def points_scenario_1(a):
    return 1 if a == 'X' else 2 if a == 'Y' else 3


def points_scenario_2(a, b):
    if (a == 'A' and b == 'Y') or (a == 'B' and b == 'X') or (a == 'C' and b == 'Z'):
        return 1
    elif (a == 'A' and b == 'Z') or (a == 'B' and b == 'Y') or (a == 'C' and b == 'X'):
        return 2
    else:
        return 3


def outcome_scenario_2(a):
    return 0 if a == 'X' else 3 if a == 'Y' else 6


with open('input.txt', 'r') as f:
    lines = tuple(f.read().splitlines())

    print(
        reduce(lambda score, line: score + outcome_scenario_1(line[0], line[2]) + points_scenario_1(line[2]), lines, 0))
    print(
        reduce(lambda score, line: score + outcome_scenario_2(line[2]) + points_scenario_2(line[0], line[2]), lines, 0))
