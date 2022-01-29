import React from 'react';

function Header({number , number2}) {
    console.log('header component re-rendered!')
    return (
         <div>
             Header
         </div>
    );
}

export default React.memo(Header);
