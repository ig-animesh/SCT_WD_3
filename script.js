const gameBoard = document.querySelector('.game-board');
const cells = document.querySelectorAll('.cell');
const gameStatusText = document.getElementById('game-status-text');
const resetButton = document.getElementById('reset-button');

let currentPlayer = 'X';
let gameOver = false;
let moves = 0;

cells.forEach((cell) => {
    cell.addEventListener('click', handleCellClick);
});

resetButton.addEventListener('click', resetGame);

function handleCellClick(event) {
    const cell = event.target;
    if (gameOver || cell.textContent !== '') {
        return;
    }
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer);
    moves++;
    checkForWin();
    checkForDraw();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkForWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (const condition of winConditions) {
        const cell1 = cells[condition[0]].textContent;
        const cell2 = cells[condition[1]].textContent;
        const cell3 = cells[condition[2]].textContent;
        if (cell1 !== '' && cell1 === cell2 && cell2 === cell3) {
            gameOver = true;
            gameStatusText.textContent = `Player ${cell1} wins!`;
            return;
        }
    }
}

function checkForDraw() {
    if (moves === 9 && !gameOver) {
        gameOver = true;
        gameStatusText.textContent = 'It\'s a draw!';
    }
}

function resetGame() {
    currentPlayer = 'X';
    gameOver = false;
    moves = 0;
    cells.forEach((cell) => {
        cell.textContent = '';
        cell.classList.remove('X', 'O');
    });
    gameStatusText.textContent = '';
}