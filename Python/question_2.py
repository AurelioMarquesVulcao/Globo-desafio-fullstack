# A bracket is considered any of the following characters: (,), {,}, [or].
# Two brackets are considered a combined pair if the opening bracket (that is, (, [or {) occurs to the left of a
# closing bracket (ie),] or} of the same exact type. There are three types of bracket pairs: [], {} and ().
# A pair of matching brackets is not balanced if the opening and closing brackets do not match between
# si. For example, {[(])} is not balanced because the content between {and} is not balanced. The first bracket includes the
# opening, (, and the second includes an unbalanced closing bracket,].
# Given character strings, determine whether each sequence of brackets is balanced. If a string is
# balanced, return YES. Otherwise, return NO.


# Um bracket é considerado qualquer um dos seguintes caracteres: (, ), {, }, [ ou ].
# Dois brackets são considerados um par combinado se o bracket de abertura (isto é, (, [ou {) ocorre à esquerda de um
# bracket de fechamento (ou seja,),] ou} do mesmo tipo exato. Existem três tipos de pares de brackets : [], {} e ().
# Um par de brackets correspondente não é balanceado se o de abertura e o de fechamento não corresponderem entre
# si. Por exemplo, {[(])} não é balanceado porque o conteúdo entre {e} não é balanceado. O primeiro bracket inclui o
# de abertura, (, e o segundo inclui um bracket de fechamento desbalanceado,].
# Dado sequencias de caracteres, determine se cada sequência de brackets é balanceada. Se uma string estiver
# balanceada, retorne SIM. Caso contrário, retorne NAO.


def balancing_bracket(String):
    if String.count('{') == String.count('}'):

        if String.count('[') == String.count(']'):

            if String.count('(') == String.count(')'):
                return 'Yes'

    return 'Not'



# teste case
test_1 = "{[()]}"
test_2 = "{(])}"
test_3 = "{{[[(())]]}}"
print(balancing_bracket(test_1))
print(balancing_bracket(test_2))
print(balancing_bracket(test_3))
