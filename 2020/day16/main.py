import functools


def get_included_values(line):
    left_1 = int(line.split(":")[1].split("or")[0].split("-")[0])
    left_2 = int(line.split(":")[1].split("or")[0].split("-")[1])

    right_1 = int(line.split(":")[1].split("or")[1].split("-")[0])
    right_2 = int(line.split(":")[1].split("or")[1].split("-")[1])

    return set(range(left_1, left_2 + 1)).union(set(range(right_1, right_2 + 1)))


class Category:
    name: str
    values: set
    position: int

    def __init__(self, string):
        self.name = string.split(":")[0]

        left_1 = int(string.split(":")[1].split("or")[0].split("-")[0])
        left_2 = int(string.split(":")[1].split("or")[0].split("-")[1])
        right_1 = int(string.split(":")[1].split("or")[1].split("-")[0])
        right_2 = int(string.split(":")[1].split("or")[1].split("-")[1])

        self.values = set(range(left_1, left_2 + 1)).union(set(range(right_1, right_2 + 1)))
        self.position = -1

    def __eq__(self, other):
        return self.name == other.name

    def __hash__(self):
        return self.name.__hash__()

    def __str__(self):
        return "Category{name=\"" + self.name + "\", position=" + str(self.position) + "}"


def calculate_rate(invalid_set):
    return functools.reduce(lambda a, b: a + b, invalid_set)


def all_assigned(categories):
    ret = True
    for category in categories.values():
        if category.position == -1:
            ret = False
    return ret


def assign_position_to_categories(valid_tickets, categories):
    potentials = dict()

    while not all_assigned(categories):
        for i in range(0, 20):
            potentials[i] = set(categories.values())
            for ticket in valid_tickets:
                number = ticket[i]
                potential_categories = set()
                for category in categories.values():
                    if category.position == -1 and number in category.values:
                        potential_categories.add(category)

                potentials[i] = potentials[i].intersection(potential_categories)

            if len(potentials[i]) == 1:
                target_category = potentials[i].pop()
                categories[target_category.name].position = i

    return potentials


def get_departures_result(ticket, categories):
    result = 1
    for category in categories.values():
        if category.name.startswith("departure"):
            result *= ticket[category.position]

    return result


def solve():
    with open('input.txt', 'r') as f:
        lines = tuple(f.read().splitlines())

        categories = dict()
        all_values = set()
        for i in range(0, 20):
            category = Category(lines[i])
            categories[category.name] = category
            all_values = all_values.union(category.values)

        invalid_tickets = list()
        valid_tickets = list()
        for i in range(25, 264):
            ticket_numbers = set([int(n) for n in lines[i].split(",")])
            invalid_numbers = ticket_numbers.difference(all_values)
            invalid_tickets.extend(invalid_numbers)

            is_valid = len(invalid_numbers) == 0
            if is_valid:
                valid_tickets.append(tuple([int(n) for n in lines[i].split(",")]))

        print(calculate_rate(invalid_tickets))

        assign_position_to_categories(valid_tickets, categories)
        my_ticket = tuple([int(n) for n in lines[22].split(",")])
        print(get_departures_result(my_ticket, categories))


solve()
