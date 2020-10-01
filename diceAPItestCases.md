# Dice class (API)

This is a Dice clas for dice games.
Dice has a field that holds the number of dots.
The number of dots is between 1 and a given upper bound. The maximum upper bound is 20.
If the dice hasn't been rolled, the number of dots is 0.

##### Test cases
0. test that all methods and getter are defined.

## Operations

### **constructor**

- initializes the dice with upper bound that s passed as a parameter
- initializes dot count to 0
- if upper bound is missing the the default upper bound is 6.
- if upper bound is not an integer, throw an exception`'Upper bound must be an integer'`;
- if the upper bound is not between 1 and 20, an exception is thrown:
   - upper bound > 20: `'Upper bound too big'`
   - upper bound < 1: `'Upper bound too small'`

### Test cases
1. Create a dice with no upper bound
  - creates a dice with lower bound 1 and the upper bound 6
  - dot count is zero

2. Create a dice with all upper bounds 1 to 20 
   - creates a dice with all upper bounds 1 to 20

3. Test exceptions with wrong upper bounds
   - 21 throws and exception 'Upper bound too big'
   -  -1 throws and exception 'Upper bound too small'
   - throws an exception 'Upper bound too small"
   - 'a' throws an exception `'Upper bound must be an integer'`;
   - 2.5 throws an exception `'Upper bound must be an integer'`;
   
### ** getters **

### **minimumValue**
- returns the lower bound of a dice.It should be 1.

### Test case
4. Test that the minimum value is 1

### **maximumValue**
 - returns the upper bound of a dice
### Test case
5. create a dice with upper bound 20 and check id the maximum value is the same as the upper bound.Test this with test case 2.
### ** dots **
- returns the number of dots.

### **methods**


### **roll**

- rolls the dice
- dot count become a random number between 1 and the upper bound
- when a dice is rolled, the dot count can't become zero again.
- returns nothing

##### Test cases
6. create a dice with no upper bound.
   Upper bound is 6 test when the dice hasnt been rolled.Dot cound should be 0 test when rolled, dot count should be 1 and 6.

7. create a dice with no upper bound 20.
   Upper bound is 6 test when the dice hasnt been rolled.Dot cound should be 0 test when rolled, dot count should be 1 and 20.

### **toString**
- returns dot count as a string. For example: `'4'`;
- if the dice hasn't been rolled yet, returns a text `'Not rolled yet`.

##### Test cases
in both case create a new dice first with no upper bound.
8. dice not rolled returns  'Not rolled yet'
9. dice rolled,returns dot count as a string. Compare the result of to string to dots.