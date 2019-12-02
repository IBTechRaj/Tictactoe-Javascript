import game from "./src/js/game.js";

function start() {
  game.resetBtn();
  game.listenClicks(game.board.changeSquare, game.board.renderBoard, start);
  const name1 = document.querySelector("#name1");
  name1.addEventListener("input", e => {
    game.players.X.changeName(e.target.value);
  });
  const name2 = document.querySelector("#name2");
  name2.addEventListener("input", e => {
    game.players.O.changeName(e.target.value);
  });
  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    game.resetBtn();
    button.classList.add("hide");
  });
}
start();
