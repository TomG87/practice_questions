# A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return .

# Example



# The person can buy a , or a . Choose the latter as the more expensive option and return .

# Function Description

# Complete the getMoneySpent function in the editor below.

# getMoneySpent has the following parameter(s):

# int keyboards[n]: the keyboard prices
# int drives[m]: the drive prices
# int b: the budget
# Returns

# int: the maximum that can be spent, or  if it is not possible to buy both items
# Input Format

# The first line contains three space-separated integers , , and , the budget, the number of keyboard models and the number of USB drive models.
# The second line contains  space-separated integers , the prices of each keyboard model.
# The third line contains  space-separated integers , the prices of the USB drives.

# Constraints

# The price of each item is in the inclusive range .
# Sample Input 0

# 10 2 3
# 3 1
# 5 2 8
# Sample Output 0

# 9
# Explanation 0

# Buy the  keyboard and the  USB drive for a total cost of .

# Sample Input 1

# 5 1 1
# 4
# 5
# Sample Output 1

# -1
# Explanation 1

# There is no way to buy one keyboard and one USB drive because , so return .

def mostExpensive(price, keyboard, usb):
  
  moneyAvailable = 0  
  itemsBought = -1    
  x = 0             
  
 
  while x < len(price):  
    if price[x] > moneyAvailable:  
      moneyAvailable = price[x]  
    x += 1 
  y = 0
  while y < len(keyboard):
    z = 0

    while z < len(usb):
      total = keyboard[y] + usb[z]  
      if total <= moneyAvailable and total > itemsBought:
        itemsBought = total  
      z += 1  
    y += 1  

  return itemsBought

print(mostExpensive([60], [40, 50, 60], [5, 8, 12]))