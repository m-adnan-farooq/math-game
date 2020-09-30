import { Button } from "@material-ui/core";
import React from "react";
import { Main } from "./Main";



export function GameOver ({score, questions}) {
  function reset(){
    return(
      <Main/>
      )
  }
  return(
    <div>
      <p id="game-over">Game Over</p>
      <p id="final-score">
        You scored {score} out of {questions}
      </p>
      <div style={{textAlign:"center"}}>
        <Button id='reset-button' autoFocus={true} variant="contained" color='primary' onClick={reset}>Reset</Button></div>
    
    </div>)
};
