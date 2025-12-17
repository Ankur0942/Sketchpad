const container = document.querySelector('#container');


for (let i = 0; i < 256; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.style.margin = "0";
    squareDiv.style.border = "1px solid black";
    squareDiv.style.width = "40px";
    squareDiv.style.height = "auto";
    squareDiv.style.flexGrow = "1";
    // squareDiv.style.flexShrink = "0";

    container.appendChild(squareDiv);
}

function createGrid() {
}