def get_count(s):
    count = 0
    i = 0
    j = 0
    vowels = ['a','e','i','o','u']
    
    for i in range(len(s)):
        for j in range(len(vowels)):
            if s[i] == vowels[j]:
                count = count + 1
            else:
                continue
    
    return count
pass