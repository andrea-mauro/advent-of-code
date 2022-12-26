def snafu_to_decimal(snafu):
    decimal = 0
    for i, char in enumerate(reversed(snafu)):
        if char == '=':
            decimal -= 2 * pow(5, i)
        elif char == '-':
            decimal -= pow(5, i)
        else:
            decimal += int(char) * pow(5, i)

    return decimal


def decimal_to_snafu(decimal):
    snafu = []
    quotient = int(decimal)

    if quotient == 0:
        return '0'

    add = 0
    while quotient > 0:
        rest = quotient % 5 + add
        if rest <= 2:
            snafu.insert(0, str(rest))
            add = 0
        elif rest == 3:
            snafu.insert(0, '=')
            add = 1
        elif rest == 4:
            snafu.insert(0, '-')
            add = 1
        elif rest == 5:
            snafu.insert(0, '0')
            add = 1

        quotient //= 5

    return ''.join(snafu)


def solve():
    with open('input.txt') as file:
        sum = 0
        for line in file.read().splitlines():
            sum += snafu_to_decimal(line)

    return decimal_to_snafu(sum)


print(solve())
