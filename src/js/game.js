import board from "./board.js";
import Players from "./player.js";

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

  const cellClickedEventHandler = evt => {
    const cellValue = evt.target.dataset.value;
    if (!evt.target.classList.contains("cell")) return;

    if (board.grid[cellValue] !== null) {
      alert("Position is already filled up - try another cell.");
      return;
    }
    board.grid[cellValue] = Players.player;
    evt.target.innerHTML = Players.player;

    won = gameIsWon(Players.player);

    draw = checkTie(won);
    if (won) {
      alert(`the game was won by player with symbol ${Players.player}`);
      return;
    }
    if (draw) {
      alert(`this is a tie`);
    }
    Players.player = Players.player === "X" ? "O" : "X";
  };

  return {
    resetBtn,
    gameIsWon,
    checkTie,
    cellClickedEventHandler
  };
})();

export default gameFactory;
