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
        if (state === 1) {
            const num1 = 1 + getRandomInt(12);
            const num2 = 1 + getRandomInt(12);
            setNumber1(num1); setNumber2(num2);
            setOptions(loadOptions(num1, num2));
        }
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

        const shuffleArray = getShuffleArray(getUniqueArray(arrPosible));
        const arrOptions = shuffleArray.slice(0, 3);
        arrOptions.push(num1 * num2);
        getShuffleArray(arrOptions);
        return arrOptions;
    }

    const rangePosible = 3;
    const containInRange = (x, xMin, xMax) => x < xMin ? xMin : ( x > xMax ? xMax : x );
    const getUniqueArray = arr => [...new Set(arr)];
    const getRandomInt = max => Math.floor(Math.random() * max);
    const getShuffleArray = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            // [arr[i], arr[j]] = [arr[j], arr[i]];
            const temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
        }
        return arr;
    }

    return (
        <>
            <Title
                state={state}
                setState={setState}
                loadQuestion={loadQuestion}
                />
            <Question
                state={state}
                number1={number1}
                number2={number2}
                />
            <Options
                state={state}
                options={options}
                />
        </>
    );
}

export default Multiplicolas;