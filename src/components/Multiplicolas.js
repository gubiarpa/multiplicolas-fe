import React, { useEffect, useState } from "react";
import { Title } from "./Title";
import { Question } from "./Question";

const Multiplicolas = () => {

    const [state, setState] = useState(0);
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [options, setOptions] = useState([]);

    const loadNumbers = () => {
        setNumber1(4);
        setNumber2(8);
    }

    useEffect(() => {
        loadNumbers();
    }, []);

    return (
        <>
            <Title
                state={state} setState={setState}
            />
            <Question
                state={state}
                number1={number1} setNumber1={setNumber1}
                number2={number2} setNumber2={setNumber2}
                options={options} setOptions={setOptions}
            />
        </>
    );
}

export default Multiplicolas;