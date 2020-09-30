function numberGenerator(level, numberState) {
    var [number, setNumber] = numberState;
    if (level === '1') {
        setNumber([Math.ceil(Math.random() * 10), Math.ceil(Math.random() * 10)])
    }
    else if (level === '2') {
        setNumber([Math.ceil(Math.random() * 30), Math.ceil(Math.random() * 30)])
    }
    else if (level === '3') {
        setNumber([Math.ceil(Math.random() * 60), Math.ceil(Math.random() * 60)])
    }
    else if (level === '4') {
        setNumber([Math.ceil(Math.random() * 100), Math.ceil(Math.random() * 100)])
    }
    else {
        setNumber([Math.ceil(Math.random() * 500), Math.ceil(Math.random() * 500)])
    }
}
export default numberGenerator;