# Dado um array de números inteiros, retorne os índices dos dois números de forma que eles se
# somem a um alvo específico.
# Você pode assumir que cada entrada teria exatamente uma solução, e você não pode usar o
# mesmo elemento duas vezes.


def alvo(x, y):
    for c in range(0, len(x)):
        num1 = x[0+c]
        for i in range(0, len(x)):
            num2 = x[i]
            if i == c:
                continue
            # print(num1, num2)
            z = num1 + num2
            if z == y:
                return num1, num2
    else:
        return 'Erro-01'


def alvo2(x, y):
    for c in range(0, len(x)):
        num1 = x[0+c]
        for i in range(0, len(x)):
            num2 = x[i]
            if num1 == num2:
                continue
            # print(num1, num2)
            z = num1 + num2
            if z == y:
                return num1, num2
    else:
        return 'Erro-01'

