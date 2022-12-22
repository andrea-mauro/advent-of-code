class Operation:
    operator: str
    left_operand: int
    right_operand: int
    result: int

    def __init__(self, operator, left_operand, right_operand, result):
        self.operator = operator
        self.left_operand = left_operand
        self.right_operand = right_operand
        self.result = result

    def __str__(self):
        return f'{self.result}' if self.result is not None else f'{self.left_operand} {self.operator} {self.right_operand}'

    def __repr__(self):
        return self.__str__()


def parse_input():
    operations = dict()

    with open('input.txt') as file:
        for line in file.read().splitlines():
            key = line.strip().split(":")[0]

            l = line.strip().split(":")[1].split(" ")
            if len(l) == 2:
                operation = Operation(None, None, None, l[1])
            else:
                operation = Operation(l[2], l[1], l[3], None)

            operations[key] = operation

    return operations


def solve():
    operations = parse_input()

    ret = False
    while not ret:

        for key, op in operations.items():
            if op.result is None:
                if operations[op.left_operand].result is not None and operations[op.right_operand].result is not None:
                    operations[key].result = eval(f'{operations[op.left_operand].result} {op.operator} {operations[op.right_operand].result}')

        ret = True
        for op in operations.values():
            if op.result is None:
                ret = False
                break

    print(operations['root'])


solve()
