import React from 'react';

function Header3({number, increment}) {
    console.log('header3 component re-rendered!')
    return (
        <div>
            Header
            <br/>
            <button onClick={increment}>
                Click - set number
            </button>
        </div>
    );
}

export default React.memo(Header3);
