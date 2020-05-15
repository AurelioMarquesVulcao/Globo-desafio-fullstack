def water_line(x, y):
    matrix = []
    for i in range(0, len(x)):
        if x[i] > y:
            matrix.append(1)
        else:
            matrix.append(0)

    return matrix


def height_line(x):
    matrix = []
    for j in range(0, max(x)):
        matrix.append(water_line(x, j))

    return matrix


def volume_of_water(x):
    matrix = height_line(x)
    volume = 0
    for c in range(0, len(matrix)-1):
        for i in range(0, len(matrix[0])-1):
            if matrix[c][i] == 1:
                if matrix[c][i+1] != 1:
                    volume += 1
            if i > 1:
                if matrix[c][i] == 0:
                    if matrix[c][i+1] == 0:
                        if matrix[c][i-1] == 0:
                            volume += 1

    return volume


# test case

test_1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
print(volume_of_water(test_1))
