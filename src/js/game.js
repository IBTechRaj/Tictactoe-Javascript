import board from "./board.js";

const gameFactory = (() => {
  let won = null;
  let draw = null;

  const winningMovesOn3x3Board = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  let names = {
    X: "",
    O: ""
  };

  const resetBtn = () => {
    board.resetBoard();
  };

  const gameIsWon = currentPlayer => {
    return winningMovesOn3x3Board.reduce(
      (a, c) =>
        a |
        (board.grid[c[0]] === currentPlayer &&
          board.grid[c[1]] === currentPlayer &&
          board.grid[c[2]] === currentPlayer),
      false
    );
  };

  const checkTie = x => board.grid.every(board.emptyCell) && x === 0;

  return {
    won,
    draw,
    resetBtn,
    gameIsWon,
    checkTie,
    names
  };
})();

export default gameFactory;
