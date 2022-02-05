import React, { useEffect, useState } from "react";
import { Title } from "./Title";
import { Question } from "./Question";
import { Options } from "./Options";

const Multiplicolas = () => {

    const [state, setState] = useState(0);
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        loadQuestion();
    }, []);

    const loadQuestion = () => {
        const num1 = getRandomInt(12);
        const num2 = getRandomInt(12);
        setNumber1(num1); setNumber2(num2);
        setOptions(loadOptions(num1, num2));
    }

    const loadOptions = (num1, num2) => {
        const arrPosible = [];
        for (let i = num1 - rangePosible; i < num1 + rangePosible; i++) {
            let x = containInRange(i, 1, 12);
            for (let j = num2 - rangePosible; j < num2 + rangePosible; j++) {
                let y = containInRange(j, 1, 12);
                if (num1 * num2 !== x * y) arrPosible.push(x * y);
            }
        }
        return getUniqueArray(arrPosible);
    }

    const rangePosible = 3;
    const containInRange = (x, xMin, xMax) => x < xMin ? xMin : ( x > xMax ? xMax : x );
    const getUniqueArray = arr => [...new Set(arr)];
    const getRandomInt = max => Math.floor(Math.random() * max);

    return (
        <>
            <Title
                state={state}
                setState={setState}
                />
            <Question
                state={state}
                number1={number1} setNumber1={setNumber1}
                number2={number2} setNumber2={setNumber2}
                />
            <Options
                state={state}
                options={options}
                />
        </>
    );
}

export default Multiplicolas;