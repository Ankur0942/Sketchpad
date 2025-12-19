const container = document.querySelector('#container');

//LOOP THROUGH USERINPUT
function createGrid(squaresPerSide) {
    container.innerHTML = ""; //When userInput changes it clears the old grid

    let totalSquares = squaresPerSide * squaresPerSide;

    for (let i = 0; i < totalSquares; i++) {

        const square = document.createElement('div');
        square.style.boxSizing = "border-box";
        square.style.border = "1px solid black"

        squareWidth = 960 / squaresPerSide;
        square.style.width = `${squareWidth}px`;
        square.style.height = `${squareWidth}px`;

        square.style.flexGrow = "1"

        container.appendChild(square);

        square.addEventListener('mouseenter', () => {

            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);

            let randomColor = `rgb(${r}, ${g}, ${b})`;
            square.style.backgroundColor = randomColor;
        })
    }
}

//DEFAULT (40X40)
createGrid(40);


// USER INPUT 
function alertFunction() {
    let userInput = prompt('Enter a number between 1-100 to create a Grid');

    // **null in js null always converts to 0**
    //check null first to exit properly in cancel
    //try putting `userInput < 1 || userInput > 100` in if statement and check the cancel button works or not!
    if (userInput === null) {
        return; //Exits Directly
    } else if (userInput < 1 || userInput > 100) {
        alertFunction();
    } else {
        createGrid(userInput);
    }
}