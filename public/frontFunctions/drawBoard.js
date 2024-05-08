
function drawBoard() {

    const board = document.querySelector('.board');
    const chessColumns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const squareSize = calculateSquareSize();
    board.style.width = `${squareSize * 8}px`;
    board.style.height = `${squareSize * 8}px`

    for (let row = 8; row >= 1; row--) {
        const firstSquareColor = row % 2 === 0 ? '#eeeed2' : '#769656';
        const secondSquareColor = row % 2 === 0 ? '#769656' : '#eeeed2';

        for (let column = 0; column <= 7; column++) {

            const square = document.createElement('div');
            square.classList.add('square');

            const squareText = document.createElement('p');
            square.appendChild(squareText);

            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;

            square.style.backgroundColor = column % 2 === 0 ? firstSquareColor : secondSquareColor;

            square.id = chessColumns[column] + row;
            board.appendChild(square);

        }
    }
}

function calculateSquareSize() {
    const screenWidth = window.innerWidth / 8;
    const screenHeight = window.innerHeight / 8;
    const squareSize = Math.min(screenWidth, screenHeight)*0.85;
    return squareSize
}


export default drawBoard; 