import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import { NativeSelect } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Addition } from "./Addition";
import { Subtraction } from "./Subtraction";
import { Multiplication } from "./Multiplication";
import { Division } from "./Division";
import { findByLabelText } from "@testing-library/react";

var maths;
var level;
var questions;
var mathLevel;
export const Main = () => {
  const levels = [1, 2, 3, 4, 5];
  const mathematics = ["Addition", "Subtraction", "Multiplication", "Division"];
  const count = [5,10,15,20]
  const [screen, setScreen] = useState(false);

  const handleChangeMaths = (mathsValue) => {
    maths = mathsValue;
  };
  const handleChangeLevel = (levelValue) => {
    level = levelValue;
  };
  const handleChangeQuestion = (questionValue) => {
    questions = questionValue;
  };
 
  const submit = () => {
    if (maths == undefined || level == undefined) {
      alert("Please make a valid selection to proceed");
    } else {
      mathLevel = [maths, level, questions];
      setScreen(true);
    }
  };
  if (screen === false)
    return (
      <div className="bodyDiv">
        <img id="teacher-image" src={require("./images/Math3.png")} />
        <Typography variant="h6" className="heading">
          <h6 className="heading">Maths Game for Kids</h6>
        </Typography>
        <div id="selection-fields">
          <FormControl color="primary">
            <NativeSelect
              id="native-select"
              className="selectLevel"
              defaultValue=""
              onChange={(e) => handleChangeMaths(e.target.value)}
            >
              <option>Select Game</option>
              {mathematics.map((key, index) => (
                <option
                  key={index}
                  value={mathematics[index]}
                >
                  {mathematics[index]}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
          <FormControl>
            <NativeSelect
              id="native-select"
              className="selectLevel"
              defaultValue=""
              onChange={(e) => handleChangeLevel(e.target.value)}
            >
              <option>Select Level</option>
              {levels.map((key, index) => (
                <option
                  key={index}
                  value={levels[index]}
                >
                  {levels[index]}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
          <FormControl>
            <NativeSelect
              id="native-select"
              className="selectLevel"
              defaultValue=""
              onChange={(e) => handleChangeQuestion(e.target.value)}
            >
              <option>No. of Questions</option>
              {count.map((key, index) => (
                <option
                  key={index}
                  value={count[index]}
                >
                  {count[index]}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
        </div>
        <div id="btn-div">
          <Button variant="contained" className="btn-main" onClick={submit}>
            Submit
          </Button>
        </div>
      </div>
    );
  else if (maths == "Addition") return <Addition mathsLevel={mathLevel} />;
  else if (maths == "Subtraction")
    return <Subtraction mathsLevel={mathLevel} />;
  else if (maths == "Multiplication")
    return <Multiplication mathsLevel={mathLevel} />;
  // Needs working
  else if (maths == "Division") return <Division mathsLevel={mathLevel} />;
  else{
      alert('Please make a valid selection')
  }
};
