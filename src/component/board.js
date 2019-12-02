const board = (() => {
  let squares = ["", "", "", "", "", "", "", "", ""];
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
    getSquare
  };
})();

export default board;
