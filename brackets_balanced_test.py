#!/usr/bin/env python

# sample input:
# '3'
# '{[()]}'
# '{[(])}'
# '{{[[(())]]}}'

def is_matched(expression):
    a = []
    for char in expression:
        if char == '(':
            a.append(')')
        elif char == '{':
            a.append('}')
        elif char == '[':
            a.append(']')
        elif not len(a) or a.pop() != char:
            return False
    return not len(a)

t = int(input().strip())
for a0 in range(t):
    expression = input().strip()
    if is_matched(expression) == True:
        print("YES")
    else:
        print("NO")
