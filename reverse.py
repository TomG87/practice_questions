def reverseString(string):
  
  newString = list(string)
  newString.reverse()

  return "".join(newString)

print(reverseString("reverse"))
                              
def reverse(string):

  return string[::-1]

print(reverse("reverse"))                         