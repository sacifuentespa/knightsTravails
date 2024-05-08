import { findShortestPath, chessboardGraph } from "../../src/knights.js";
import drawBoard from "./drawBoard.js";

drawBoard();

const beginButton = document.querySelector('#begin');
const resetButton = document.querySelector('#reset');

function makeSquaresSelectable() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.classList.add('selectable')
        square.addEventListener('click', getSquareId);
    });
}

function getSquareId(event) {
    return event.target.id;
}

async function beginPath() {
    resetBoard();

    const squares = document.querySelectorAll('.square');

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
    startingSquare.style.backgroundColor = "yellow"
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

    const shortestPath = findShortestPath(chessboardGraph, startingSquareId, finalSquareId);

    squares.forEach(square => { square.classList.remove('selectable') });

    instruction.textContent = `Shortest path is: ${shortestPath.join('->')}`;

    for (let i = 1; i < shortestPath.length - 1; i++) {
        const squareMove = document.querySelector(`#${shortestPath[i]}`);
        squareMove.style.borderColor = "yellow";
        squareMove.querySelector('p').textContent = i;
    }

    return shortestPath;
}


function resetBoard() {
    const boardDiv = document.querySelector(".board");
    boardDiv.innerHTML = '';
    drawBoard();
}


beginButton.addEventListener('click', beginPath);
resetButton.addEventListener('click', resetBoard);
