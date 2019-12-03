import players from "./src/js/player.js";
import board from "./src/js/board.js";
import game from "./src/js/game.js";

let docRoot = document.getElementById("docRoot");
let gameCanvas = docRoot.querySelector("#app");
let root = docRoot.querySelector(".root");
let symbol = docRoot.querySelectorAll(".symbol");
let reset = docRoot.querySelector(".reset");
let submit = document.querySelector(".submit");
let name1 = document.querySelector("#name1");
let name2 = document.querySelector("#name2");

reset.hidden = true;
root.hidden = true;

//gameCanvas.innerHTML = board.drawGrid();
const cell = docRoot.querySelectorAll(".cell");
symbol.forEach(sym => sym.addEventListener("click", player.picksymbol));

const resetBottonClickEventHandler = () => {
  game.resetBtn();
  cell.forEach(num => {
    num.innerHTML = "";
  });
  window.location.reload();
};

const submitButtonClickEventHandler = evt => {
  evt.preventDefault();
  if (!name1.value || !name2.value) {
    alert("Please enter your name(s), a required field(s) are empty");
  } else {
    gameCanvas.innerHTML = board.drawGrid();
    name1.value;
    name2.value;
    game.names["X"] = name1.value;
    game.names["O"] = name2.value;
    name1.hidden = true;
    name2.hidden = true;
    label1.hidden = true;
    label2.hidden = true;
    submit.hidden = true;
    root.hidden = false;
    reset.hidden = false;
  }
};

const cellClickedEventHandler = evt => {
  evt.preventDefault();
  if (!name1.value || !name2.value) {
    alert("Please enter your name(s), a required field(s) are empty");
  } else {
    const cellValue = evt.target.dataset.value;
    if (!evt.target.classList.contains("cell")) return;

    if (board.grid[cellValue] !== null) {
      alert("Position is already filled up - try another cell.");
      return;
    }
    board.grid[cellValue] = players.player;
    evt.target.innerHTML = players.player;

    game.won = game.gameIsWon(players.player);
    game.draw = game.checkTie(game.won);
    if (game.won && players.player === "X") {
      alert(`Congratulation ${game.names.X}! You won the game`);
    } else if (game.won && players.player === "O") {
      alert(`Congratulations ${game.names.O}! You won the game`);
    }
    if (game.draw) {
      alert(`this is a tie`);
    }
    players.player = players.player === "X" ? "O" : "X";
  }
};

reset.addEventListener("click", resetBottonClickEventHandler);
submit.addEventListener("click", submitButtonClickEventHandler);
gameCanvas.addEventListener("click", cellClickedEventHandler);
