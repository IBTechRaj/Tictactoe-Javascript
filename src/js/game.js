import board from "./board.js";
import player from "./player.js";

const gameModule = (() => {
  let winner = null;
  let tie = null;
  let turn = "X";

  const players = {
    X: player("X"),
    O: player("O")
  };

  const resetBtn = () => {
    board.resetBoard();
    players.X.resetPlayer();
    players.O.resetPlayer();
    winner = null;
    tie = null;
    turn = "X";
    board.renderBoard();
  };

  const checkWin = moves => {
    const match = wins.map(combo => {
      let temp = true;
      combo.forEach(value => {
        if (!moves.includes(value)) temp = false;
      });
      return temp;
    });
    return match.includes(true) ? turn : null;
  };

  const checkTie = () => !board.emptySquares() && !winner;

  const changeTurn = () => {
    turn = turn === "X" ? "O" : "X";
    return turn;
  };

  const listenClicks = (changeSquare, renderBoard) => {
    const tableCells = document.querySelectorAll(".square");
    tableCells.forEach((cell, index) =>
      cell.addEventListener("click", () => {
        if (board.readSquare(index) === "") {
          if (!winner && !tie) {
            changeSquare(index, turn);
            const tempMove = players[turn].addMove(index + 1);
            winner = checkWin(tempMove);
            tie = checkTie();
            renderBoard();
            changeTurn();
            showMsg(`Make your move, ${turn} (${players[turn].getName()}) `);
          }
          if (winner)
            showMsg(`Winner is  ${winner} (${players[winner].getName()})`);
          if (tie) showMsg("That's Tie, folks");
          if (winner || tie) showBtn();
        }
      })
    );
  };

  return {
    resetBtn,
    checkWin,
    checkTie,
    changeTurn
  };
})();

export default gameModule;
