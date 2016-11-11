#!/usr/bin/env python

# sample input:
# '5 4'
# '1 2 3 4 5'

def array_left_rotation(a, n, k):
    return a[k:] + a[:k]
    
n, k = map(int, input().strip().split(' '))
a = list(map(int, input().strip().split(' ')))
answer = array_left_rotation(a, n, k);
print(answer)
