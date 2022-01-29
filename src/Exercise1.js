import React, {useState} from 'react';
import './App.css'
import Header from "./components/Header";

function Exercise1(props) {

    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);

    return (
        <div className="App">
            <Header number2={number2} number={number < 5 ? 0 : number}/>
            <hr/>

            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>
                Click - set number
            </button>

            <h1>{number2}</h1>
            <button onClick={() => setNumber2(number2 + 1)}>
                Click - set number2
            </button>
        </div>
    );
}

export default Exercise1;
