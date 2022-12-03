#!/usr/bin/env python3
from functools import reduce


def find_duplicate(string):
    length = len(string) // 2
    first = set(string[0:length])
    second = set(string[length:])

    return first.intersection(second).pop()


def find_group_badge(string1, string2, string3):
    first = set(string1)
    second = set(string2)
    third = set(string3)

    return first.intersection(second).intersection(third).pop()


def sum_priority_by_group_badge(lines):
    acc = 0
    for i in range(0, len(lines), 3):
        acc += calculate_priority(find_group_badge(lines[i], lines[i + 1], lines[i + 2]))
    return acc


def calculate_priority(char):
    if char == char.lower():
        return ord(char) - 96

    if char == char.upper():
        return ord(char) - 38


with open('input.txt', 'r') as f:
    lines = tuple(f.read().splitlines())

    print(reduce(lambda acc, line: acc + calculate_priority(find_duplicate(line)), lines, 0))
    print(sum_priority_by_group_badge(lines))
