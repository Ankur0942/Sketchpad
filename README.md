# PseudoCode for the Problem

### 1. Create a HTML structure with an Inline Event Handler onclick(assign a function for the userInput).

### 2. Create a function createGrid() that generates grid
    -> Clear any existing grid when the user changes its userInput
    -> Create a variable to store the total number of squares needed based on the userInput.
    -> Calculate the size of each square (totalSizeOfTheContainer / totalNumberOfSquares)
    -> Create an element for each and loop through it
        -> Set the width and height
        -> Add hover Event Listener
        -> Append it to the container

### 3. Add a Default createGrid();

### 4. Write the inline event Handler's function to get the userInput
    -> create a variable to store the userInput
    -> Need to handle if/else conditional statements because:
        -> Exits when user "cancels" the prompt.
        -> Handle invalid input (for eg; >100 or <0)
        -> Call createGrid() function based on the userInput 
 


# My Solution's Strong Points

### Grid Cleaning ✅
### Efficient Loop ✅
### Random Colors ✅
### Logic Validation ✅
### Recursive Validation ✅

<a href="https://ankur0942.github.io/Sketchpad/">Live Demo</a>