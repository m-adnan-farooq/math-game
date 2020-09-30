import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PlusSign from './svgs/PlusSign';
import { GameOver } from './GameOver';
import numberGenerator from './NumberGenerator';

const useStyles1 = makeStyles({
    root: {
        textAlign: "center",
        width: '30%',
        margin: "5% auto auto auto",
        backgroundColor: "yellowgreen",
        boxShadow: 'white 10px 10px 20px 5px'
    },
    pos: {
        marginBottom: 12,
        fontWeight: 600,
        color: "white",
    },
});

export const Addition = ({ mathsLevel }) => {
    const classes1 = useStyles1();
    const [maths, level, questions] = mathsLevel;
    const [response, setResponse] = useState()
    console.log(maths)
    const [number, setNumber] = useState([]);
    var [score, setScore] = useState(0);
    var [count, setCount] = useState(0);
    var gameOver = false;
    useEffect(() => {
        numberGenerator(level, [number,setNumber]);
    }, [])

    function checkAnswerEnter(e) {
        if (e.key === 'Enter') {
            checkAnswer();
        }
    }
    function checkAnswer() {
        var answer = document.getElementById('answer').value;
        if (answer === '') {
            alert('Please provide an answer before submission')
        }
        else {
            
            if (response == number[0] + number[1]) {
                setCount(count + 1);
                setScore(score += 1)
                document.getElementById('answer').value = '';
                numberGenerator(level, [number,setNumber]);
            }
            else {
                document.getElementById('answer').value = '';
                document.getElementById("incorrect-answer").style.display="block";
                document.getElementById("button").style.marginTop="0%";
                setTimeout(
                    ()=>{
                        document.getElementById("incorrect-answer").style.display="none";
                        document.getElementById("button").style.marginTop="10%";
                        numberGenerator(level, [number,setNumber]);                    
                        setCount(count + 1);
                  }
                ,1000)
                
            }
        }
    }
    if (count === parseInt(questions)) {
        gameOver = true;
    }
    if (gameOver === true){
        return (            
            <GameOver score={score} questions={questions}/>
        )}
    
    else return (
        <div className="bodyDiv">
            <Typography variant="p" className='heading'>
                <h1 className='heading'>Maths Game for Kids</h1>
            </Typography>
            <Card className={classes1.root}>
                <CardContent>
                    <Typography variant="h6" className={classes1.pos}>
                        Level-{level} Addition
                        <h6>Question No. {count+1}</h6> 
                        <span className='score'>Score: {score}</span>
                        <span className='number'>{number[0]} + {number[1]} = </span>
                        <Input id='answer' type='number' onChange={(e) => setResponse(e.target.value)}  onKeyDown={checkAnswerEnter} placeholder='Answer' />
                        <br/>
                        <p id="incorrect-answer">Incorrect !!!</p>
                        <Button id='button' autoFocus={true} variant="contained" color='primary' onClick={checkAnswer}>Submit</Button>
                    </Typography>
                </CardContent>
            </Card>
            <PlusSign/>
        </div>
    )
} 