def part1():
    with open('input.txt', 'r') as file:
        lines = tuple(file.read().splitlines())

        list1 , list2 = list(), list()
        for line in lines:
            list1.append(int(line.split("   ")[0]))
            list2.append(int(line.split("   ")[1]))

        list1.sort()
        list2.sort()

        distance = 0
        for i in range(len(list1)):
            distance += abs(list1[i] - list2[i])

        print('Part 1: ', end='')
        print(distance)

def part2():
    with open('input.txt', 'r') as file:
        lines = tuple(file.read().splitlines())

        occurrences = dict()
        for line in lines:
            number = int(line.split("   ")[1])
            occurrences[number] = occurrences.get(number, 0) + 1

        score = 0
        for line in lines:
            number = int(line.split("   ")[0])
            score += number * occurrences.get(number, 0)

        print('Part 2: ', end='')
        print(score)

#part1()
part2()
