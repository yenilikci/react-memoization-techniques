import React from 'react';

function Header2({number, number2, data}) {
    console.log('header2 component re-rendered!')
    return (
        <div>
            Header
            <br/>
            <code>
                {JSON.stringify(data)}
            </code>
        </div>
    );
}

export default React.memo(Header2);
