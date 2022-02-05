import React from "react";
import PropTypes from 'prop-types';

export const Question = ({state = 0, number1 = 0, number2 = 0, options = []}) => {
    return (
        <div className={state === 0 ? 'hidden' : ''}>
            <span>{ number1 }</span> X <span>{ number2 }</span>
        </div>
    );
}


Question.protoTypes = {
    setNumber1: PropTypes.func.isRequired,
    setNumber2: PropTypes.func.isRequired,
    setOptions: PropTypes.func.isRequired,
}