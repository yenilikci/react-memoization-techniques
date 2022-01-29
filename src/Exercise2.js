import React, {useState, useMemo} from 'react';
import './App.css'
import Header2 from "./components/Header2";

// const data = {name: 'Melih'} //reference

function Exercise2(props) {

    const [number, setNumber] = useState(0);

    const [text, setText] = useState("");

    // const data = {name: 'Melih'} //reference

    // const data = useMemo(()=>{
    //     return {name: 'Melih'}
    // },[]); //dependency array

    // const data = useMemo(() => {
    //     return {name: 'Melih', number}
    // }, [number]); //let's change it....

    // const data = useMemo(() => {
    //     return calculateObject()
    // }, []);

    // const data = calculateObject();

    const data = useMemo(() => {
        return calculateObject(number)
    }, [number]);

    return (
        <div className="App">
            <Header2 data={data}/>
            <hr/>

            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>
                Click - set number
            </button>
            <br/><br/>
            <input value={text} onChange={({target}) => setText(target.value)}/>
        </div>
    );
}

// function calculateObject() {
//     return {name: 'Melih'}
// }

function calculateObject(number) {
    console.log('calculating')
    for (let i = 0; i < 100000000; i++) {
    }
    console.log('calculation completed!')
    return {name: 'Melih', number}
}

export default Exercise2;
