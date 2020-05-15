# Dado um arratarget de números inteiros, retorne os índices dos dois números de forma que eles se
# somem a um alvo específico.
# Você pode assumir que cada entrada teria enumbersatamente uma solução, e você não pode usar o
# mesmo elemento duas vezes.


# Given an arratarget of whole numbers, return the indices of the two numbers so that they match
# disappear to a specific target.
# You can assume that each entry would have numerous solutions, and you cannot use the
# same element twice.

def find_target(numbers, target):
    for c in range(0, len(numbers)):
        num1 = numbers[0+c]
        for i in range(0, len(numbers)):
            num2 = numbers[i]
            if i == c:
                continue
            # print(num1, num2)
            z = num1 + num2
            if z == target:
                return num1, num2
    else:
        return 'Erro-01 - a target number has been inserted whose sum of two different elements of Array x cannot be met.'


def find_target_not_equal(numbers, target):
    for c in range(0, len(numbers)):
        num1 = numbers[0+c]
        for i in range(0, len(numbers)):
            num2 = numbers[i]
            if num1 == num2:
                continue
            # print(num1, num2)
            z = num1 + num2
            if z == target:
                return num1, num2
    else:
        return 'Erro-01 - a target number has been inserted whose sum of two different elements of Array x cannot be met.'


# teste case
numbers = [2, 7, 11, 15]
target = 9
print(find_target(numbers, target))
