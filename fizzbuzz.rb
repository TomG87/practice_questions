# // Problem: Write a function that prints numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number. For multiples of 5, print "Buzz". For numbers that are multiples of both 3 and 5, print "FizzBuzz".

def fizzbuzz(number)

  i = 1

while i <= number
  if i % 3 == 0 && i % 5 == 0
    p("Fizzbuzz")
  elsif i % 3 == 0
    p("Fizz")
  elsif i % 5 == 0
    p("Buzz")
  else
    p(i)
  end
  i += 1
end
end

fizzbuzz(100)