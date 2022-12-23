class Node:
    identifier: str
    value: str
    operator: str
    left = None
    right = None

    def __init__(self, identifier):
        self.identifier = identifier
        self.value = None
        self.operator = None
        self.left = None
        self.right = None

    def __str__(self):
        return f'{self.value} | {None if self.left is None else self.left.identifier} {self.operator} {None if self.right is None else self.right.identifier}'

    def __repr__(self):
        return self.__str__()

    def __eq__(self, other):
        return self.identifier == other.identifier

    def __hash__(self):
        return hash(self.identifier)


def parse_input(second_star=False):
    nodes = dict()

    with open('input.txt') as file:
        for line in file.read().splitlines():
            key = line.strip().split(":")[0]

            if key in nodes:
                node = nodes[key]
            else:
                node = Node(key)
                nodes[key] = node

            l = line.strip().split(":")[1].split(" ")
            if len(l) == 2:
                node.value = 'j' if second_star and key == 'humn' else l[1]
            else:
                left_key = l[1]
                if left_key in nodes:
                    left = nodes[left_key]
                else:
                    left = Node(left_key)
                    nodes[left_key] = left
                node.left = left

                right_key = l[3]
                if right_key in nodes:
                    right = nodes[right_key]
                else:
                    right = Node(right_key)
                    nodes[right_key] = right
                node.right = right

                node.operator = '-' if second_star and node.identifier == 'root' else l[2]

    return nodes


def dfs(node):
    if node.value:
        return node.value
    else:
        return f'({dfs(node.left)}) {node.operator} ({dfs(node.right)})'


def solve_1():
    nodes = parse_input()
    return round(eval(dfs(nodes['root'])))


def solve_2():
    nodes = parse_input(second_star=True)
    z = eval(dfs(nodes['root']), {'j': 1j})
    real, imag = z.real, -z.imag
    return round(real / imag)


print(solve_1())
print(solve_2())
