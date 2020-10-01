# Dice class (API)

This is a Dice clas for dice games.
Dice has a field that holds the number of dots.
The number of dots is between 1 and a given upper bound. The maximum upper bound is 20.
If the dice hasn't been rolled, the number of dots is 0.


## Operations

### **constructor**

- initializes the dice with upper pound that s passed as a parameter
- initializes dot count to 0
- if upper bound is missing the the default upper bound is 6.
- if upper bound is not an integer, throw an exception`'Upper pound must be an integer'`;
- if the upper bound is not between 1 and 20, an exception is thrown:
   - upper bound > 20: `'Upper bound too big'`
   - upper bound < 1: `'Upper bound too small'`
   
### ** getters **

### **minimumValue**
- returns the lower bound of a dice.It should be 1.

### **maximumValue**
 - returns the upper bound of a dice

### ** dots **
- returns the number of dots.

### **methods**


### **roll**

- rolls the dice
- dot count become a random number between 1 and the upper bound
- when a dice is rolled, the dot count can't become zero again.
- returns nothing

### **toString**
- returns dot count as a string. For example: `'4'`;
- if the dice hasn't been rolled yet, returns a text `'Not rolled yet`.

