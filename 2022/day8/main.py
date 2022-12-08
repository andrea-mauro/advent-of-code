import numpy as np


def build_tree_map(lines):
    dim = len(lines)
    tree_map = np.zeros((dim, dim), dtype=int)
    for row, line in enumerate(lines):
        for col, tree in enumerate(line):
            tree_map[row][col] = int(tree)

    return tree_map


def count_visible(tree, tree_list):
    count = 0
    for x in tree_list:
        count += 1
        if x >= tree:
            break

    return count


def solve():
    with open('input.txt') as file:
        lines = file.read().splitlines()
        dim = len(lines)

        tree_map = build_tree_map(lines)

        visible = list()
        for i in range(0, dim):
            for j in range(0, dim):
                tree = tree_map[i, j]

                if i == 0 or i == dim - 1 or j == 0 or j == dim - 1:
                    visible.append((i, j))
                elif len(list(filter(lambda a: a >= tree, tree_map[i, :j]))) == 0:
                    visible.append((i, j))
                elif len(list(filter(lambda a: a >= tree, tree_map[i, j + 1:]))) == 0:
                    visible.append((i, j))
                elif len(list(filter(lambda a: a >= tree, tree_map[:i, j]))) == 0:
                    visible.append((i, j))
                elif len(list(filter(lambda a: a >= tree, tree_map[i + 1:, j]))) == 0:
                    visible.append((i, j))

        max_score = 0
        for el in visible:
            i = el[0]
            j = el[1]
            tree = tree_map[i, j]

            view1 = count_visible(tree, reversed(tree_map[i, :j]))
            view2 = count_visible(tree, tree_map[i, j + 1:])
            view3 = count_visible(tree, reversed(tree_map[:i, j]))
            view4 = count_visible(tree, tree_map[i + 1:, j])

            score = view1 * view2 * view3 * view4
            max_score = score if score > max_score else max_score

        return len(visible), max_score


print(solve())
