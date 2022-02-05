import React from "react";

export const Question = ({state = 0, number1 = 0, number2 = 0}) => {
    return (
        <div className={state === 0 ? 'hidden' : ''}>
            <span>{ number1 }</span> X <span>{ number2 }</span>
        </div>
    );
}