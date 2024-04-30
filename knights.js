const MAX_ROWS = 8;
const MAX_COLUMNS = 8;

function isInsideBoard(column, row) {
    return row >= 0 && row < MAX_ROWS && column >= 0 && column < MAX_COLUMNS;
}

// Function to generate all possible knight moves from a given square

function generateKnightMoves(column, row) {
    const moves = [];
    const deltas = [[2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1]];
    for (const [deltaColumn, deltaRow] of deltas) {
        const newRow = row + deltaRow;
        let newColumn = column + deltaColumn;
        if (isInsideBoard(newColumn, newRow)) {
            newColumn = String.fromCharCode(97 + newColumn)
            moves.push([newColumn, newRow + 1]);
        }
    }
    return moves;
}

// In chess the letter is first and represents the column
const chessboardGraph = {};
for (let row = 0; row < MAX_ROWS; row++) {
    for (let column = 0; column < MAX_COLUMNS; column++) {
        const vertex = `${String.fromCharCode(97 + column)}${row + 1}`; 
        // Convert row and column to chess notation
        const moves = generateKnightMoves(column, row);
        chessboardGraph[vertex] = moves;
    }
}

for (const vertex in chessboardGraph) {
    console.log(`${vertex}: ${chessboardGraph[vertex]}`);
}

