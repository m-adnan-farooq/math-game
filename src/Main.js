import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import { NativeSelect } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Addition } from './Addition';
import { Subtraction } from './Subtraction';
import { Multiplication } from './Multiplication'
import { Division } from './Division';

var maths;
var level;
var mathLevel;
export const Main = () => {
    const levels = [1, 2, 3, 4, 5];
    const mathematics = ['Addition', 'Subtraction', 'Multiplication', 'Division'];

    const [screen, setScreen] = useState(false);

    const handleChangeMaths = (mathsValue) => {
        maths = mathsValue;
    }
    const handleChangeLevel = (levelValue) => {
        level = levelValue;
    }
    const submit = () => {
        mathLevel = [maths, level];
        setScreen(true);
    }
    if (screen === false)
        return (
            <div>
                <Typography variant="h4" className='heading'>
                    <span className='heading'>Maths Game for Kids</span>
                </Typography>
                <FormControl color='primary'>
                    <NativeSelect className='selectLevel' defaultValue='' onChange={(e) => handleChangeMaths(e.target.value)}>
                        <option >Select Game</option>
                        {mathematics.map((key, index) =>
                            
                            <option key={index} value={mathematics[index]}>
                                {mathematics[index]}
                            </option>
                        )}
                    </NativeSelect>
                </FormControl><FormControl>
                    <NativeSelect className='selectLevel' defaultValue='' onChange={(e) => handleChangeLevel(e.target.value)}>
                        
                        <option >Select Level</option>
                        {levels.map((key, index) =>
                            <option key={index} value={levels[index]}>
                                {levels[index]}
                            </option>
                        )}
                    </NativeSelect>
                </FormControl>
                <Button variant='contained' className='btn-main' onClick={submit}>Submit</Button>
            </div>
        )

    else if (maths == 'Addition')
        return (
            <Addition mathsLevel={mathLevel} />
        )

    else if (maths == 'Subtraction')
        return (
            <Subtraction mathsLevel={mathLevel} />
        )
        
    else if (maths == 'Multiplication')
    return (
        <Multiplication mathsLevel={mathLevel} />
    )

    // Needs working
    else if (maths == 'Division')
        return (
            <Division mathsLevel={mathLevel} />
        )
            // else{
            //     alert('Please make a valid selection')
            // }
}

