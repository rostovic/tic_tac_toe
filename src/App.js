import { useEffect, useState } from "react";
import classes from "./App.module.css";

const winningCombs = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [6, 7, 8],
  [6, 4, 2],
  [2, 5, 8],
  [3, 4, 5],
  [1, 4, 7],
];

const App = () => {
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [player, setPlayer] = useState(true);
  const [currentState, setCurrentState] = useState(new Array(9));
  const [gameWinner, setGameWinner] = useState(null);

  const startHandler = () => {
    setIsGameRunning(true);
    setCurrentState(new Array(9));
  };

  const addNumberToArray = (index) => {
    if (!isGameRunning) {
      return;
    }
    let updatedArray = [...currentState];
    if (player) {
      updatedArray[index] = "X";
    } else {
      updatedArray[index] = "O";
    }
    setCurrentState(updatedArray);
  };

  useEffect(() => {
    const checkWinner = () => {
      const indexesX = [];
      const indexesO = [];
      for (let i = 0; i < 9; i++) {
        if (currentState[i] === "X") {
          indexesX.push(i);
          continue;
        }
        if (currentState[i] === "O") {
          indexesO.push(i);
          continue;
        }
      }

      winningCombs.forEach((winningCombo) => {
        if (winningCombo.every((number) => indexesX.includes(number))) {
          setIsGameRunning(false);
          setGameWinner("Player 1");
        }
      });

      winningCombs.forEach((winningCombo) => {
        if (winningCombo.every((number) => indexesO.includes(number))) {
          setIsGameRunning(false);
          setGameWinner("Player 2");
        }
      });
    };
    checkWinner();

    const isEveryElementDefined = currentState.includes(undefined);

    if (gameWinner === null && !isEveryElementDefined) {
      setGameWinner("Draw");
      setIsGameRunning(false);
    }
    setPlayer((prev) => !prev);
  }, [currentState]);

  return (
    <div className={classes.mainDiv}>
      <div className={classes.playerDiv}>
        <span className={classes.playerText}>Player 1</span>
        <span className={classes.playerText}>Player 2</span>
      </div>
      <div className={classes.symbolDiv}>
        <span className={classes.symbolText}>X</span>
        <span className={classes.symbolText}>O</span>
      </div>

      <button
        className={classes.buttonStart}
        style={{
          opacity: isGameRunning ? 0 : 1,
          pointerEvents: isGameRunning ? "none" : "auto",
        }}
        disabled={isGameRunning}
        onClick={() => {
          setGameWinner(null);
          startHandler();
        }}
      >
        Start game
      </button>
      {gameWinner !== null ? (
        <div className={classes.winnerDiv}>
          <span style={{ color: "green", fontWeight: 700 }}>Winner:&nbsp;</span>
          <span style={{ fontWeight: 700 }}>{gameWinner}</span>
        </div>
      ) : null}

      <div className={classes.gameDiv}>
        <div className={classes.gameBorders}>
          <div
            className={classes.borderLeft}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "lightgrey")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "white")}
            onClick={() => addNumberToArray(0)}
            style={{
              pointerEvents:
                currentState[0] === "X" || currentState[0] === "O"
                  ? "none"
                  : "auto",
            }}
          >
            <span style={{ fontSize: "100px", backgroundColor: "transparent" }}>
              {currentState[0]}
            </span>
          </div>
          <div
            className={classes.borderMiddle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "lightgrey")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "white")}
            onClick={() => addNumberToArray(1)}
            style={{
              pointerEvents:
                currentState[1] === "X" || currentState[1] === "O"
                  ? "none"
                  : "auto",
            }}
          >
            <span style={{ fontSize: "100px", backgroundColor: "transparent" }}>
              {currentState[1]}
            </span>
          </div>
          <div
            className={classes.borderRight}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "lightgrey")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "white")}
            onClick={() => addNumberToArray(2)}
            style={{
              pointerEvents:
                currentState[2] === "X" || currentState[2] === "O"
                  ? "none"
                  : "auto",
            }}
          >
            <span style={{ fontSize: "100px", backgroundColor: "transparent" }}>
              {currentState[2]}
            </span>
          </div>

          <div
            className={classes.borderLeft}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "lightgrey")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "white")}
            onClick={() => addNumberToArray(3)}
            style={{
              pointerEvents:
                currentState[3] === "X" || currentState[3] === "O"
                  ? "none"
                  : "auto",
            }}
          >
            <span style={{ fontSize: "100px", backgroundColor: "transparent" }}>
              {currentState[3]}
            </span>
          </div>
          <div
            className={classes.borderMiddle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "lightgrey")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "white")}
            onClick={() => addNumberToArray(4)}
            style={{
              pointerEvents:
                currentState[4] === "X" || currentState[4] === "O"
                  ? "none"
                  : "auto",
            }}
          >
            <span style={{ fontSize: "100px", backgroundColor: "transparent" }}>
              {currentState[4]}
            </span>
          </div>
          <div
            className={classes.borderRight}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "lightgrey")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "white")}
            onClick={() => addNumberToArray(5)}
            style={{
              pointerEvents:
                currentState[5] === "X" || currentState[5] === "O"
                  ? "none"
                  : "auto",
            }}
          >
            <span style={{ fontSize: "100px", backgroundColor: "transparent" }}>
              {currentState[5]}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "190px",
              width: "190px",
              borderRight: "2px solid black",
              pointerEvents:
                currentState[6] === "X" || currentState[6] === "O"
                  ? "none"
                  : "auto",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "lightgrey")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "white")}
            onClick={() => addNumberToArray(6)}
          >
            <span style={{ fontSize: "100px", backgroundColor: "transparent" }}>
              {currentState[6]}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "190px",
              width: "190px",
              borderLeft: "2px solid black",
              borderRight: "2px solid black",
              pointerEvents:
                currentState[7] === "X" || currentState[7] === "O"
                  ? "none"
                  : "auto",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "lightgrey")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "white")}
            onClick={() => addNumberToArray(7)}
          >
            <span style={{ fontSize: "100px", backgroundColor: "transparent" }}>
              {currentState[7]}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "190px",
              width: "190px",
              pointerEvents:
                currentState[8] === "X" || currentState[8] === "O"
                  ? "none"
                  : "auto",
              borderLeft: "2px solid black",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "lightgrey")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "white")}
            onClick={() => addNumberToArray(8)}
          >
            <span style={{ fontSize: "100px", backgroundColor: "transparent" }}>
              {currentState[8]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
