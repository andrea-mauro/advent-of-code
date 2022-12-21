class Node:
    value: int
    previous = None
    next = None

    def __init__(self, value):
        self.value = value
        self.previous = None
        self.next = None

    def __str__(self):
        return f'{self.value} | p:{None if self.previous is None else self.previous.value} n:{None if self.next is None else self.next.value}'


def get_linked_list(multiplier=1):
    numbers = list()
    prev = None
    current = None
    head = None

    with open('input.txt') as file:
        for line in file.read().splitlines():
            current = Node(int(line) * multiplier)
            numbers.append(current)

            if prev is not None:
                current.previous = prev
                prev.next = current
            else:
                head = current

            prev = current

    current.next = head
    head.previous = current

    return head, numbers


def solve(multiplier=1, shuffle=1):
    node, numbers = get_linked_list(multiplier=multiplier)

    for i in range(0, shuffle):
        print(i)
        for n in numbers:
            node = n
            node_next = node

            count = 0
            while n.value != 0 and count < (abs(n.value) % (len(numbers)-1)):
                if n.value > 0:
                    node_next = node_next.next
                else:
                    node_next = node_next.previous
                count += 1

            if n.value < 0 and abs(n.value) % (len(numbers)-1) != 0:
                node_next = node_next.previous

            if node != node_next:
                one = node.previous
                two = node
                three = node.next
                four = node_next
                five = node_next.next

                one.next = three
                three.previous = one
                four.next = two
                two.previous = four
                two.next = five
                five.previous = two

    while True:
        if node.value == 0:
            break
        node = node.next

    counter = 0
    ret = 0
    while True:
        if counter == 1000 or counter == 2000 or counter == 3000:
            print(node.value)
            ret += node.value

        counter += 1
        node = node.next

        if counter == 3001:
            break

    print(ret)


solve()
solve(multiplier=811589153, shuffle=10)
