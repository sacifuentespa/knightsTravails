
function makeSquaresSelectable(){
    squares = document.querySelectorAll('.square');
    squares.forEach(square => {square.classList.add('selectable')
    square.addEventListener('click', getSquareId);
    });
}

function getSquareId(event){
    return event.target.id;
}

async function beginPath(){
    makeSquaresSelectable();
    const instruction = document.querySelector('.instruction');
    instruction.textContent = "Select starting square";
    
    const startingSquareId = await new Promise(resolve => {
        // Resolve the promise with the square ID when a square is clicked
        const squareClickHandler = (event) => {
            const squareId = getSquareId(event);
            resolve(squareId);
        };
        squares.forEach(square => square.addEventListener('click', squareClickHandler));
    });

    const startingSquare = document.querySelector(`#${startingSquareId}`)
    startingSquare.style.backgroundColor = "green"
    startingSquare.querySelector('p').textContent = "S"

    instruction.textContent = "Select final square";

    const finalSquareId = await new Promise(resolve => {
        // Resolve the promise with the square ID when a square is clicked
        const squareClickHandler = (event) => {
            const squareId = getSquareId(event);
            resolve(squareId);
        };
        squares.forEach(square => square.addEventListener('click', squareClickHandler));
    });

    const finalSquare = document.querySelector(`#${finalSquareId}`)
    finalSquare.style.backgroundColor = "red";
    finalSquare.querySelector('p').textContent = "F"

    squares.forEach(square => {square.classList.remove('selectable')});
    
}


beginPath();
