from functools import cmp_to_key


def solve():
    with open('input.txt') as file:
        lines = file.read().splitlines()

        sorted_sum = 0
        packets = list()
        for i in range(0, len(lines), 3):
            left = eval(lines[i])
            right = eval(lines[i + 1])
            packets.append(left)
            packets.append(right)

            comp = compare(left, right)
            index = int(i / 3) + 1

            if comp:
                sorted_sum += index

        print(sorted_sum)

        packets.append(eval('[[2]]'))
        packets.append(eval('[[6]]'))
        l_sorted = sorted(packets, key=cmp_to_key(lambda a, b: -1 if compare(a, b) else 1))
        prod = 1
        for idx, el in enumerate(l_sorted):
            if str(el) == '[[2]]' or str(el) == '[[6]]':
                prod *= idx + 1
        print(prod)


def compare(left, right):
    if left is None and right is not None:
        return True
    if left is not None and right is None:
        return False

    if isinstance(left, int) and isinstance(right, int):
        if left < right:
            return True
        if left > right:
            return False
        else:
            return None

    if isinstance(left, list) and isinstance(right, list):

        left_iter = iter(left)
        right_iter = iter(right)

        next_left = True
        next_right = True
        while next_left is not None and next_right is not None:
            next_left = next(left_iter, None)
            next_right = next(right_iter, None)

            if left is None and right is not None:
                return True
            if left is not None and right is None:
                return False
            else:
                comp = compare(next_left, next_right)
                if comp is True:
                    return True
                if comp is False:
                    return False

    if isinstance(left, list) and isinstance(right, int):
        return compare(left, [right])

    if isinstance(left, int) and isinstance(right, list):
        return compare([left], right)


solve()
