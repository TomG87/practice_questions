# // Problem: Write a function that prints numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number. For multiples of 5, print "Buzz". For numbers that are multiples of both 3 and 5, print "FizzBuzz".


def fizzbuzz(number):
  i = 1

  while i <= number:
    if i % 3 == 0 and i % 5 == 0:
      print("Fizzbuzz")
    elif i % 3 == 0:
      print("Fizz")
    elif i % 5 == 0:
      print("Buzz")
    else:
      print(i)
    i += 1

fizzbuzz(100)