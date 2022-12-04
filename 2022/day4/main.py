#!/usr/bin/env python3


def is_contained(left, right):
    temp = left.start >= right.start and left.stop <= right.stop
    temp = temp or (right.start >= left.start and right.stop <= left.stop)

    return temp


def overlap(left, right):
    return left.stop <= right.start or right.stop <= left.stop


with open('input.txt', 'r') as f:
    lines = tuple(f.read().splitlines())

    count_contained = 0
    count_overlap = 0
    for line in lines:
        left_interval = line.split(',')[0].split('-')
        right_interval = line.split(',')[1].split('-')

        left_range = range(int(left_interval[0]), int(left_interval[1]))
        right_range = range(int(right_interval[0]), int(right_interval[1]))

        left_set = set(range(int(left_interval[0]), int(left_interval[1]) + 1))
        right_set = set(range(int(right_interval[0]), int(right_interval[1]) + 1))

        count_contained = count_contained + (1 if is_contained(left_range, right_range) else 0)
        count_overlap = count_overlap + (1 if len(left_set.intersection(right_set)) > 0 else 0)

    print(count_contained)
    print(count_overlap)
