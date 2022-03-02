import React, { useRef, useState } from 'react';
import News from './News';
import Weather from './Weather';

function Main() {
    return (
        <>
            <div className=''>
                <Weather />
                <News />
            </div>
        </>
    )
}

export default Main;