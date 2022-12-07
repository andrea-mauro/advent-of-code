TOTAL_SPACE_AVAILABLE = 70000000
SPACE_NEEDED = 30000000


def get_filesystem():
    with open('input.txt') as file:
        lines = file.read().splitlines()

        filesystem = {}
        path = []
        for line in lines:
            if line == '$ cd ..':
                directory = path.pop()
                directory_size = filesystem.get(directory, 0)
                last = path[len(path) - 1]
                filesystem[last] = filesystem.get(last, 0) + directory_size
            elif line.startswith('$ cd'):
                directory = '-'.join(path) + line.split(' ')[2]
                path.append(directory)
            elif not line.startswith('$') and not line.startswith('dir'):
                last = path[len(path) - 1]
                file_size = int(line.split(' ')[0])
                filesystem[last] = filesystem.get(last, 0) + file_size

        while len(path) > 1:
            directory = path.pop()
            directory_size = filesystem.get(directory, 0)
            last = path[len(path) - 1]
            filesystem[last] = filesystem.get(last, 0) + directory_size

        return filesystem


def solve():
    filesystem = get_filesystem()

    first_star = 0
    for directory in filesystem:
        if filesystem[directory] <= 100000:
            first_star += filesystem[directory]

    print(first_star)

    free_space = TOTAL_SPACE_AVAILABLE - filesystem['/']
    space_to_free = SPACE_NEEDED - free_space
    deletable_folders = list()
    for directory in filesystem:
        if filesystem[directory] >= space_to_free:
            deletable_folders.append((directory, filesystem[directory]))

    deletable_folders.sort(key=lambda a: a[1])
    print(deletable_folders[0][1])


solve()
