const PlayerFactory = (() => {
  const symbol = "";
  let store = [];
  let symb = "";
  let player = "X";

  const root = document.querySelector(".root");
  const symbolSection = document.querySelector(".symbol-section");

  function addSymbolToStore(symbol) {
    if (symbol === "X") {
      store.push("X", "O");
    }
  }

  const template = () => {
    return `
    <p>First player, your symbol is: ${store[0]}</p>
    <p>Second player, your symbol is: ${store[1]}</p>
    <h3>Start Game</h3>
    `;
  };

  const render = (tpl, node) => {
    node.innerHTML = tpl;
  };

  const picksymbol = e => {
    symb = e.target.dataset.symbol;
    addSymbolToStore(symb);
    symbolSection.hidden = "true";
    player = e.target.innerHTML;
    render(template(), root);
  };

  return {
    addSymbolToStore,
    picksymbol,
    template,
    render,
    player
  };
})();

export default PlayerFactory;
