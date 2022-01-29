import React, {useState, useMemo, useCallback} from 'react';
import './App.css'
import Header3 from "./components/Header3";

function Exercise3(props) {

    const [number, setNumber] = useState(0);
    const [text, setText] = useState("");

    // const increment = () => setNumber(number + 1);

    //return memoize func
    const increment = useCallback(() => {
        setNumber(prevState => prevState + 1);
    }, []);

    return (
        <div className="App">
            <Header3 increment={increment}/>
            <hr/>

            <h1>{number}</h1>

            <br/><br/>
            <input value={text} onChange={({target}) => setText(target.value)}/>
        </div>
    );
}

export default Exercise3;
