import player from "./src/js/player.js";
import board from "./src/js/board.js";
import game from "./src/js/game.js";

var docRoot = document.getElementById("docRoot");
var gameCanvas = docRoot.querySelector("#app");
const symbol = docRoot.querySelectorAll(".symbol");
const button = docRoot.querySelector("button");

gameCanvas.innerHTML = board.drawGrid();
const cell = docRoot.querySelectorAll(".cell");
symbol.forEach(sym => sym.addEventListener("click", player.picksymbol));
gameCanvas.addEventListener("click", game.cellClickedEventHandler);

const bottonClickEventHandler = () => {
  game.resetBtn();
  let count = 0;
  cell.forEach(num => {
    num.innerHTML = "";
  });
};
button.addEventListener("click", bottonClickEventHandler);
