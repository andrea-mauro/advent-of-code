def is_start_of_message_marker(string):
    return len(set(string)) == len(string)


def solve(marker_dimension):
    with open('input.txt', 'r') as f:
        line = f.read()

    for i in range(marker_dimension, len(line)):
        if is_start_of_message_marker(line[i - marker_dimension: i]):
            return i


print(solve(4))
print(solve(14))
