# 

def hurdle(number, array):
  max = array[0]
  x = 0

  while x < len(array):
    if array[x] > max:
      max = array[x]
    x += 1
  
  if number >= max:
    return 0
  else:
    return max - number
  
print(hurdle(4, [1, 6, 3, 5, 2]))