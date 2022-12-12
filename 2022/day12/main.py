class Node:
    id = str
    letter = str
    elevation: int
    start: bool
    end: bool
    distance: int
    connections: set

    def __init__(self, position, letter):
        self.id = str(position)
        self.letter = letter
        self.elevation = ord('a') if letter == 'S' else ord('z') if letter == 'E' else ord(letter)
        self.start = letter == 'S'
        self.end = letter == 'E'
        self.distance = 0 if self.end else None
        self.connections = set()

    def __eq__(self, other):
        return self.id == other.id

    def __hash__(self):
        return hash(self.id)

    def __str__(self):
        return f'id={self.id}, ' \
               f'letter={self.letter}, ' \
               f'elevation={self.elevation}, ' \
               f'start={self.start}, ' \
               f'end={self.end}, ' \
               f'distance={self.distance} ' \
               f'connections={[conn.id for conn in self.connections]}'


def parse_input():
    nodes = dict()
    with open('input.txt') as file:
        lines = file.read().splitlines()

        for row, line in enumerate(lines):
            for col, char in enumerate(line):
                pos = (row, col)
                node = Node(pos, char)
                nodes[pos] = node

    for (x, y), node in nodes.items():

        next = nodes.get((x + 1, y))
        if next is not None and (node.elevation <= next.elevation or node.elevation == next.elevation + 1):
            node.connections.add(next)

        next = nodes.get((x - 1, y))
        if next is not None and (node.elevation <= next.elevation or node.elevation == next.elevation + 1):
            node.connections.add(next)

        next = nodes.get((x, y + 1))
        if next is not None and (node.elevation <= next.elevation or node.elevation == next.elevation + 1):
            node.connections.add(next)

        next = nodes.get((x, y - 1))
        if next is not None and (node.elevation <= next.elevation or node.elevation == next.elevation + 1):
            node.connections.add(next)

    return nodes


def djkstra():
    nodes = parse_input()
    unvisited = list(nodes.values())

    node = list(filter(lambda a: a.end, nodes.values()))[0]

    while node is not None:
        for neighbor in node.connections:
            if neighbor in unvisited:
                dist = node.distance + 1
                neighbor.distance = dist if neighbor.distance is None else min(dist, neighbor.distance)

        unvisited.remove(node)

        potential_next = list(filter(lambda a: a.distance is not None, unvisited))
        potential_next.sort(key=lambda a: a.distance)
        node = next(iter(potential_next), None)

    start_distance = list(filter(lambda a: a.start, nodes.values()))[0].distance
    print(start_distance)

    min_dist = start_distance
    for node in nodes.values():
        if node.letter in ('a', 'S') and node.distance is not None:
            min_dist = min(min_dist, node.distance)

    print(min_dist)


djkstra()
