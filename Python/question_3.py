def purchase_day(a, b, x):
    y = x.index(purchase_value(a, b))
    return y+1


def sale_day(a, c, x):
    y = x.index(sale_value(a, c))
    return y+1


def purchase_value(a, b):
    x = a.index(max(a))
    return b[x]


def sale_value(a, c):
    x = a.index(max(a))
    return c[x]


def varification(x):
    a = []
    b = []
    c = []
    d = []
    for j in range(len(x)-1, 0, -1):
        num1 = x[j]
        for i in range(len(x)-1, -1, -1):
            num2 = x[i]
            if i == j:
                continue
            if i > j:
                continue
            v_sale = num1 - num2
            a = a + [v_sale]
            b += [num2]
            c += [num1]
            d = [max(a), purchase_value(a, b), purchase_day(a, b, x),
                 sale_value(a, c), sale_day(a, c, x)]
    return d


# teste se posso  vender
def sale(x):
    if varification(x)[0] > 0:
        verif = f"{varification(x)[0]}  Comprou no dia {varification(x)[2]} (preço igual a {varification(x)[1]}) e vendeu no dia {varification(x)[4]}(preço igual a {varification(x)[3]}) lucro foi de {varification(x)[3]} – {varification(x)[1]} = {varification(x)[0]}"
        return verif
        

    if varification(x)[0] <= 0:
        return '0 (Nesse caso nenhuma transação deve ser feita, lucro máximo igual a 0)'





# test case

test_1 = [7,6,4,3,1]
test_2=[7,1,5,3,6,4]

print(sale(test_1))
print(sale(test_2))