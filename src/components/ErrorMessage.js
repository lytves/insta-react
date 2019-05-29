import React from 'react';
import img from '../error.png';

// other syntaxis for export default function Feed() {...}

const ErrorMessage = () => {

    return (
        // create a a layout that doesn't render itself but serves to rendering other tags inside them
        <>

            <img src={img} alt="Error"/>

        </>

    )

};

export default ErrorMessage;
