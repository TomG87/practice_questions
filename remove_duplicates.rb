# // Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

def dups(array)

  x = 0
  new_array = []

  while x < array.length
    unless new_array.include?(array[x])
      new_array << array[x]
    else
      x += 1
    end
  end
  
  return new_array
end

p dups(["John", "Taylor", "John"])