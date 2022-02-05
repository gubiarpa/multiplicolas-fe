import React from "react";
import PropTypes from 'prop-types';

export const Title = ({state, setState}) => {

    const handleClick = () => {
        console.log('gubiarpa is here!')
        setState(x => x === 0 ? 1 : 0);
    }

    return (
        <>
            <div>
                <h2>Multiplicolas</h2>
                <button onClick={handleClick}>{ state === 0 ? 'Empezar Test' : 'Detener Test' }</button>
            </div>
        </>
    );
}

Title.protoTypes = {
    setState: PropTypes.func.isRequired
}