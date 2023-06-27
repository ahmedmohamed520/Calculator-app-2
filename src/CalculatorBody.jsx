import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Button from "./Button";

const CalculatorBody = ({ setInputValue, inputValue, setResult, setOperator, operator, result }) => {
    const [key, setKey] = useState("");
    const typeNumHandler = (num) => {
        if (num !== ".") num = +num;

        setInputValue((prevValue) => {
            if (result && !operator) {
                setResult(0);
            }

            if (+prevValue > 0) {
                return prevValue + String(num);
            } else {
                return prevValue + num;
            }
        });
    };
    const startOperationHandler = (op) => {
        if (operator) {
            calcTwoValues(operator);
        } else {
            setResult(+inputValue + +result);
        }
        if (op === "*") {
            setOperator("x");
        } else {
            setOperator(op);
        }
        setInputValue(0);
    };
    const calcTwoValues = (operator) => {
        if (operator === "x") {
            setResult((result) => +result * Number(inputValue));
        }
        if (operator === "/") {
            setResult((result) => +result / Number(inputValue));
        }
        if (operator === "+") {
            setResult((result) => +result + Number(inputValue));
        }
        if (operator === "-") {
            setResult((result) => +result - Number(inputValue));
        }
    };
    const calcResultHandler = () => {
        calcTwoValues(operator);

        setOperator();
        setInputValue(0);
    };
    const deleteCharHandler = () => {
        if (inputValue > 0) {
            setInputValue(inputValue.slice(0, -1));
        } else {
            setResult(0);
        }
    };

    const resetHandler = () => {
        setInputValue(0);
        setResult(0);
        setOperator();
    };
    window.addEventListener("keydown", (e) => {
        setKey(e.key);
    });

    useEffect(() => {
        if ((+key >= 0 && +key < 10) || key === ".") {
            typeNumHandler(key);
        }
        if (key === "*" || key === "/" || key === "+" || key === "-") {
            startOperationHandler(key);
        }
        if (key === "Backspace") {
            deleteCharHandler();
        }
        if (key === "Escape") {
            resetHandler();
        }
        if (key === "=" || key === "Enter") {
            calcResultHandler();
        }
    }, [key]);

    return (
        <Wrapper>
            <Button value={7} clickHandler={typeNumHandler} />
            <Button value={8} clickHandler={typeNumHandler} />
            <Button value={9} clickHandler={typeNumHandler} />
            <Button value={"DEL"} clickHandler={deleteCharHandler} classes="btn btn-gray" />
            <Button value={4} clickHandler={typeNumHandler} />
            <Button value={5} clickHandler={typeNumHandler} />
            <Button value={6} clickHandler={typeNumHandler} />
            <Button value={"+"} clickHandler={startOperationHandler} />
            <Button value={1} clickHandler={typeNumHandler} />
            <Button value={2} clickHandler={typeNumHandler} />
            <Button value={3} clickHandler={typeNumHandler} />
            <Button value={"-"} clickHandler={startOperationHandler} />
            <Button value={"."} clickHandler={typeNumHandler} />
            <Button value={0} clickHandler={typeNumHandler} />
            <Button value={"/"} clickHandler={startOperationHandler} />
            <Button value={"x"} clickHandler={startOperationHandler} classes="btn " />
            <Button value={"RESET"} clickHandler={resetHandler} classes="btn btn-gray btn-2" />
            <Button value={"="} clickHandler={calcResultHandler} classes="btn btn-red btn-2 btn-equal" />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 1.5rem;
    padding: 1.5rem;
    background-color: var(--bg-keybad-toggle);
    border-radius: 10px;

    .btn {
        background-color: var(--key-bg-regular);
        padding: 0.75rem 1.5rem;
        text-align: center;
        font-weight: 700;
        font-size: 2rem;
        border-radius: 10px;
        color: var(--clr-main);
        cursor: pointer;
        box-shadow: 0 5px 0 var(--key-shadow-regular);
        user-select: none;
    }
    .btn:hover {
        background-color: var(--key-bg-regular-hover);
    }
    .btn-gray {
        background-color: var(--key-bg-gray);
        color: #fff;
        box-shadow: 0 5px 0 var(--key-shadow-gray);
    }
    .btn-gray:hover {
        background-color: var(--key-bg-gray-hover);
    }
    .btn-red {
        color: var(--clr-white);
        background-color: var(--key-bg-toggle);
        box-shadow: 0 5px 0 var(--key-shadow-red);
    }
    .btn-red:hover {
        background-color: var(--key-bg-toggle-hover);
    }
    .btn-2 {
        grid-column: span 2;
    }
    .btn-equal {
        color: var(--clr-equal);
    }
`;

export default CalculatorBody;
