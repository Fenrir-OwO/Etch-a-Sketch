const container = document.getElementById('container');
const sizeBtn = document.getElementById('sizeBtn');
const colorBtn = document.getElementById('colorBtn')

let gridSquares = 16;
let randomColorOnHover = false;

const printGrid = (gridSquares) => {
    for (let i = 0; i < gridSquares; i++) {
        for (let j = 0; j < gridSquares; j++) {
            const square = document.createElement('div');
            squa
            re.classList.add('grid-square');
            // Set the width and height of each square dynamically
            square.style.width = `${640 / gridSquares}px`;
            square.style.height = `${640 / gridSquares}px`;
            square.addEventListener('mouseover', () => {
                if (randomColorOnHover) {
                    square.style.backgroundColor = getRandomColor(); // Change to random color on mouseover if flag is true
                } else {
                    square.style.backgroundColor = 'black'; // Change to black on mouseover if flag is false
                }
            });            
            container.appendChild(square);
        }
    }
}; 

const getRandomColor = () => {
    // Generate random RGB values
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);

    return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
};

const setGrid = () => {
    let newSquares = prompt('Enter a number between 4 and 100');
    
    // Parse the input to ensure it's treated as a number
    newSquares = parseInt(newSquares);

    if (newSquares >= 4 && newSquares <= 100) {
        gridSquares = newSquares;

        // Clear existing grid before creating a new one
        container.innerHTML = '';

        printGrid(gridSquares);
    } else {
        alert('Invalid Input. Please enter a number between 4 and 100.');
    }
};

const changeColors = () => {
    randomColorOnHover = !randomColorOnHover; // Toggle the flag
};

sizeBtn.addEventListener('click', setGrid); 
colorBtn.addEventListener('click', changeColors);  

printGrid(gridSquares);