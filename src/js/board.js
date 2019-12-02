const boardModule = (() => {
  let squares = ["", "", "", "", "", "", "", "", ""];

  let grid = new Array(9);
  grid.fill(null);

  const drawGrid = () =>
    grid
      .map((_, index) => `<div class="square" data-value="${index}"></div>`)
      .join("");

  const renderBoard = () => {
    const tableCells = document.querySelectorAll("square");
    tableCells.forEach((cell, index) => {
      cell.innerHTML = squares[index];
    });
  };

  const emptySquares = () => squares.includes("");
  const resetBoard = () => {
    squares = ["", "", "", "", "", "", "", "", ""];
  };
  const readSquare = index => squares[index];
  const changeSquare = (index, value) => {
    square[index] = value;
    return squares;
  };
  const getSquare = () => squares;
  return {
    renderBoard,
    emptySquares,
    resetBoard,
    readSquare,
    changeSquare,
    getSquare,
    drawGrid
  };
})();

export default boardModule;
