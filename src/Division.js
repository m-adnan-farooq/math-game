import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DivideSign from './svgs/DivideSign'
import { GameOver } from './GameOver';

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

export const Division = ({ mathsLevel }) => {
    const classes1 = useStyles1();
    const [maths, level, questions] = mathsLevel;
    console.log(maths);
    const [response, setResponse] = useState()
    const [count,setCount] = useState(0);
    var gameOver = false;
    const [number, setNumber] = useState([]);
    var [score, setScore] = useState(0);

    
    useEffect(() => {
        if (level === '1') {
            var a =0;
            var b = 0;
            do{
                a = Math.ceil(Math.random() * 10)
                b = Math.ceil(Math.random() * 10)
                setNumber([a,b])
            }
            while(
                a%b !== 0
            )
        }
        else if (level === '2') {
            a =0;
            b = 0;
            do{
                a = Math.ceil(Math.random() * 30)
                b = Math.ceil(Math.random() * 30)
                setNumber([a,b])
            }
            while(
                a%b !== 0
            )
        }
        else if (level === '3') {
            a = 0;
            b = 0;
            do{
                a = Math.ceil(Math.random() * 60)
                b = Math.ceil(Math.random() * 60)
                setNumber([a,b])
            }
            while(
                a%b !== 0
            )
        }
        else if (level === '4') {
            a = 0;
            b = 0;
            do{
                a = Math.ceil(Math.random() * 100)
                b = Math.ceil(Math.random() * 100)
                setNumber([a,b])
            }
            while(
                a%b !==0
            )
        }
        else {
            a = 0;
            b = 0;
            do{
                a = Math.ceil(Math.random() * 500)
                b = Math.ceil(Math.random() * 500)
                setNumber([a,b])
            }
            while(
                a%b !== 0
            )
        }
    }, [])

    function checkAnswerEnter(e) {
        if (e.key === 'Enter') {
            checkAnswer();
        }
    }

    function checkAnswer() {
        var answer = document.getElementById('answer').value;
        if (answer === ''){
            alert('Please provide an answer before submission')
        }
        else {
        if (parseInt(response) === number[0] / number[1]) {
            setCount(count+1)
            setScore(score += 1)
            document.getElementById('answer').value = '';
            if (level === '1') {
                var a =0;
                var b = 0;
                do{
                    a = Math.ceil(Math.random() * 10)
                    b = Math.ceil(Math.random() * 10)
                    setNumber([a,b])
                }
                while(
                    a%b !== 0
                )
            }
            else if (level === '2') {
                a =0;
                b = 0;
                do{
                    a = Math.ceil(Math.random() * 30)
                    b = Math.ceil(Math.random() * 30)
                    setNumber([a,b])
                }
                while(
                    a%b !== 0
                )
            }
            else if (level === '3') {
                a = 0;
                b = 0;
                do {
                    a = Math.ceil(Math.random()*60)
                    b = Math.ceil(Math.random()*60)
                    setNumber([a,b])
                }
                while(
                    a%b !== 0
                )
            }
            else if (level === '4') {
                a = 0;
                b = 0;
                do{
                    a = Math.ceil(Math.random()*100)
                    b = Math.ceil(Math.random()*100)
                    setNumber([a,b])
                }
                while(
                    a%b !==0
                )
            }
            else {
                a = 0;
                b = 0;
                do{
                    a = Math.ceil(Math.random()*500)
                    b = Math.ceil(Math.random()*500)
                    setNumber([a,b])
                }
                while(
                    a%b !== 0
                )
            }
        }
        else {
            document.getElementById('answer').value = '';
            document.getElementById("incorrect-answer").style.display="block";
            document.getElementById("button").style.marginTop="0%";
            setTimeout(
                ()=>{
                    document.getElementById("incorrect-answer").style.display="none";
                    document.getElementById("button").style.marginTop="10%";
                    setCount(count+1)
                    if (level === '1') {
                        var a =0;
                        var b = 0;
                        do{
                            a = Math.ceil(Math.random() * 10)
                            b = Math.ceil(Math.random() * 10)
                            setNumber([a,b])
                        }
                        while(
                            a%b !== 0
                        )
                    }
                    else if (level === '2') {
                        a =0;
                        b = 0;
                        do{
                            a = Math.ceil(Math.random() * 30)
                            b = Math.ceil(Math.random() * 30)
                            setNumber([a,b])
                        }
                        while(
                            a%b !== 0
                        )
                    }
                    else if (level === '3') {
                        a = 0;
                        b = 0;
                        do {
                            a = Math.ceil(Math.random()*60)
                            b = Math.ceil(Math.random()*60)
                            setNumber([a,b])
                        }
                        while(
                            a%b !== 0
                        )
                    }
                    else if (level === '4') {
                        a = 0;
                        b = 0;
                        do{
                            a = Math.ceil(Math.random()*100)
                            b = Math.ceil(Math.random()*100)
                            setNumber([a,b])
                        }
                        while(
                            a%b !==0
                        )
                    }
                    else {
                        a = 0;
                        b = 0;
                        do{
                            a = Math.ceil(Math.random()*500)
                            b = Math.ceil(Math.random()*500)
                            setNumber([a,b])
                        }
                        while(
                            a%b !== 0
                        )
                    }                  
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
            <Typography variant="h6" className="heading">
                <div className="heading">Maths Game for Kids</div>
            </Typography>
            <Card className={classes1.root}>
                <CardContent>
                    <Typography variant="h6" className={classes1.pos}>
                        Level-{level} Division
                    </Typography>
                    <Typography variant="h6" className={classes1.pos}>
                        <p>Question No. {count+1}</p> 
                        <span className='score'>Score: {score}</span>
                        <span className='number'>{number[0]} / {number[1]} = </span>
                        <Input id='answer' type='number' onChange={(e) => setResponse(e.target.value)} onKeyUp={checkAnswerEnter} placeholder='Answer' />
                        <br/>
                        <p id="incorrect-answer">Incorrect !!!</p>
                        <Button id='button' autoFocus={true} variant="contained" color='primary' onClick={checkAnswer}>Submit</Button>
                    </Typography>
                </CardContent>
            </Card>
            <DivideSign/>
        </div>
    )
} 