const board = (() => {
  let grid = new Array(9);
  grid.fill(null);

  const drawGrid = () =>
    grid
      .map((_, index) => `<div class="cell" data-value="${index}"></div>`)
      .join("");

  const resetBoard = () => {
    grid = grid.fill(null);
  };

  const emptyCell = currentValue => currentValue !== null;

  return {
    grid,
    drawGrid,
    resetBoard,
    emptyCell
  };
})();

export default board;
