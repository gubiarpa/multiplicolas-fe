import React from "react";
import PropTypes from 'prop-types';

export const Title = ({state, loadQuestion = () => {}, setState}) => {

    const handleClick = () => {
        setState(x => x === 0 ? 1 : 0);
        if (state === 1) {
            loadQuestion();
        }
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
    setState: PropTypes.func.isRequired,
    loadQuestion: PropTypes.func.isRequired,
}