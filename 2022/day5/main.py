from copy import deepcopy

INPUT = (
    ['B', 'P', 'N', 'Q', 'H', 'D', 'R', 'T'],
    ['W', 'G', 'B', 'J', 'T', 'V'],
    ['N', 'R', 'H', 'D', 'S', 'V', 'M', 'Q'],
    ['P', 'Z', 'N', 'M', 'C'],
    ['D', 'Z', 'B'],
    ['V', 'C', 'W', 'Z'],
    ['G', 'Z', 'N', 'C', 'V', 'Q', 'L', 'S'],
    ['L', 'G', 'J', 'M', 'D', 'N', 'V'],
    ['T', 'P', 'M', 'F', 'Z', 'C', 'G']
)


def crater_move_9000():
    with open('input.txt', 'r') as f:
        lines = tuple(f.read().splitlines())

        cargo = deepcopy(INPUT)
        for i in range(10, 512):
            instruction = lines[i]
            quantity = int(instruction.split(' ')[1])
            origin = int(instruction.split(' ')[3])
            destination = int(instruction.split(' ')[5])

            for x in range(0, quantity):
                cargo[destination - 1].append(cargo[origin - 1].pop())

        output = ""
        for i in range(0, 9):
            output += cargo[i][len(cargo[i]) - 1]

        return output


def crater_move_9001():
    with open('input.txt', 'r') as f:
        lines = tuple(f.read().splitlines())

        cargo = deepcopy(INPUT)
        for i in range(10, 512):
            instruction = lines[i]
            quantity = int(instruction.split(' ')[1])
            origin = int(instruction.split(' ')[3])
            destination = int(instruction.split(' ')[5])

            supporting_list = list()
            for x in range(0, quantity):
                supporting_list.append(cargo[origin - 1].pop())

            for x in range(0, quantity):
                cargo[destination - 1].append(supporting_list.pop())

        output = ""
        for i in range(0, 9):
            output += cargo[i][len(cargo[i]) - 1]

        return output


print("crater move 9000 =", crater_move_9000())
print("crater move 9001 =", crater_move_9001())
