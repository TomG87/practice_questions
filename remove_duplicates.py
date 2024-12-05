# // Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).


def dups(array):
  x = 0
  newArray = []
  while x < len(array):
    if array[x] not in newArray:
      newArray.append(array[x])
      x += 1
    else:
      x += 1

      return newArray
    
print(dups(["John", "Taylor", "John"]))