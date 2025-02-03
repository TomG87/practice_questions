def largest(array):

  x = 0
  max = array[0]

  while x < len(array):
    if array[x] > max:
      max = array[x]
    x += 1

  return max

print(largest([1, 3, 7, 2, 5]))
