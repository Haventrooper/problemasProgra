def solution(s):
    stringPar = []
    cont = 0
    contPar = 0
    i = 0
    length = len(s)
    
    for i in range(len(s)):
        cont += 1
    
        if cont == 2:
            stringPar.append(s[i-1] + s[i])
            contPar += 1
            cont = 0

    if len(s) % 2 != 0:
        stringPar.append(s[len(s)-1] + '_')
    
    return stringPar
pass