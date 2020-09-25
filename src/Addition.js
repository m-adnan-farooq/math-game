import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const useStyles1 = makeStyles({
    root: {
        textAlign: "center",
        minWidth: 25,
        maxWidth: 300,
        margin: 40,
        backgroundColor: "#F64C72",
    },
    pos: {
        marginBottom: 12,
        fontWeight: 600,
        color: "#242582",
    },
});

export const Addition = ({ mathsLevel }) => {
    const classes1 = useStyles1();
    const [maths, level] = mathsLevel;
    const [response, setResponse] = useState()

    const [number, setNumber] = useState([]);
    var [score, setScore] = useState(0);
    var [count, setCount] = useState(0);
    var gameOver = false;
    useEffect(() => {
        if (level == '1') {
            setNumber([Math.ceil(Math.random() * 10), Math.ceil(Math.random() * 10)])
        }
        else if (level == '2') {
            setNumber([Math.ceil(Math.random() * 30), Math.ceil(Math.random() * 30)])
        }
        else if (level == '3') {
            setNumber([Math.ceil(Math.random() * 60), Math.ceil(Math.random() * 60)])
        }
        else if (level == '4') {
            setNumber([Math.ceil(Math.random() * 100), Math.ceil(Math.random() * 100)])
        }
        else {
            setNumber([Math.ceil(Math.random() * 500), Math.ceil(Math.random() * 500)])
        }
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
            setCount(count + 1);
            if (response == number[0] + number[1]) {
                setScore(score += 1)
                document.getElementById('answer').value = '';
                if (level == '1') {
                    setNumber([Math.ceil(Math.random() * 10), Math.ceil(Math.random() * 10)])
                }
                else if (level == '2') {
                    setNumber([Math.ceil(Math.random() * 30), Math.ceil(Math.random() * 30)])
                }
                else if (level == '3') {
                    setNumber([Math.ceil(Math.random() * 60), Math.ceil(Math.random() * 60)])
                }
                else if (level == '4') {
                    setNumber([Math.ceil(Math.random() * 100), Math.ceil(Math.random() * 100)])
                }
                else {
                    setNumber([Math.ceil(Math.random() * 500), Math.ceil(Math.random() * 500)])
                }

            }
            else {
                alert('Incorrect Answer')
                document.getElementById('answer').value = '';
                if (level == '1') {
                    setNumber([Math.ceil(Math.random() * 10), Math.ceil(Math.random() * 10)])
                }
                else if (level == '2') {
                    setNumber([Math.ceil(Math.random() * 30), Math.ceil(Math.random() * 30)])
                }
                else if (level == '3') {
                    setNumber([Math.ceil(Math.random() * 60), Math.ceil(Math.random() * 60)])
                }
                else if (level == '4') {
                    setNumber([Math.ceil(Math.random() * 100), Math.ceil(Math.random() * 100)])
                }
                else {
                    setNumber([Math.ceil(Math.random() * 500), Math.ceil(Math.random() * 500)])
                }
            }
        }
    }
    
    if (count === 2) {
        gameOver = true;
    }
    if (gameOver === true)
        return (
            <div>
                <span id="game-over">Game Over</span>
                <p id="final-score">You scored {score}</p>
            </div>
        )
    
    else return (
        <div>
            <Typography variant="h4" className='heading'>
                <span className='heading'>Maths Game for Kids</span>
            </Typography>
            <Card className={classes1.root}>
                <CardContent>
                    <Typography variant="h6" className={classes1.pos}>
                        Level-{level} Addition
                        <span className='score'>Score: {score}</span>
                        <span className='number'>{number[0]} + {number[1]} = </span>
                        <Input id='answer' type='number' onChange={(e) => setResponse(e.target.value)}  onKeyDown={checkAnswerEnter} placeholder='Answer' />
                        <Button id='button' autoFocus={true} variant="contained" color='primary' onClick={checkAnswer}>Submit</Button>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
} 