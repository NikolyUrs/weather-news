import React, { useRef, useState } from 'react';
import News from './News';
import Weather from './Weather';

function Main() {
    return (
        <>
                <Weather />
                <News />
        </>
    )
}

export default Main;