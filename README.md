# SCT_WD_3
Tic-Tac-Toe Application
Overview

A web-based Tic-tac-toe game that allows users to play against each other or the computer. The application is built using HTML, CSS, and JavaScript, and features a responsive design for a seamless gaming experience.

Features

- Play against another player or the computer
- Interactive game board with real-time updates
- Functions to handle user clicks, track game state, and check for winning conditions
- Responsive design for a seamless gaming experience on various devices

Technologies Used

- HTML5
- CSS3
- JavaScript

Gameplay

1. Start a new game by clicking on the "New Game" button.
2. Players take turns clicking on empty squares to place their marks (X or O).
3. The game checks for winning conditions after each move.
4. If a player wins, the game displays a winning message and highlights the winning squares.
5. If all squares are filled and no player has won, the game displays a draw message.

Computer Opponent

The computer opponent uses a simple algorithm to make its moves. The algorithm checks for the following conditions in order:

1. Win: If the computer can win in the next move, it will place its mark in the winning square.
2. Block: If the player can win in the next move, the computer will place its mark in the blocking square.
3. Center: The computer will place its mark in the center square if it is empty.
4. Random: The computer will place its mark in a random empty square.
