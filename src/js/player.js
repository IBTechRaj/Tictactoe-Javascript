const playerModule = (symbol => {
  let name = "";
  let getName = () => {
    return name;
  };
  let setName = playerName => {
    name = PlayerName;
  };

  let moves = [];

  const addMove = move => {
    moves.push(move);
    return moves;
  };

  const resetPlayer = () => {
    moves = [];
  };

  return {
    getName,
    setName,
    addMove,
    resetPlayer
  };
})();

export default playerModule;
