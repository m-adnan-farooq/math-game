import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { Main } from "./Main";

export function GameOver({ score, questions }) {


  const resetScreen = (e) => {
    e.preventDefault()
    document.getElementById("reset-button").addEventListener("click", function () { setreturnMain(!returnMain) })
  }


  const [returnMain, setreturnMain] = useState(true)
  if (returnMain === true) {
    return (
      <div>
        <p id="game-over">Game Over</p>
        <p id="final-score">
          You scored {score} out of {questions}
        </p>
        <div style={{ textAlign: "center" }}>
          <Button id='reset-button' autoFocus={true} variant="contained" color='primary' onClick={resetScreen}>Reset</Button>
        </div>
      </div>
    )
  }

  else if (returnMain === false) {
    return <Main />
  }
};
