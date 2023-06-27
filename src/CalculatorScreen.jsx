import React from "react";
import { styled } from "styled-components";

const CalculatorScreen = ({ inputValue, result, operator }) => {
    return (
        <Wrapper>
            <div className="result">
                {/* {result ? (operator ? inputValue : result) : inputValue} */}
                {inputValue ? inputValue : operator ? inputValue : result}
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    background-color: var(--bg-screen);
    padding: 1.5rem;
    border-radius: 10px;
    margin-bottom: 1.5rem;
    .result {
        color: var(--clr-header);
        text-align: right;
        font-weight: 700;
        font-size: 2rem;
        letter-spacing: 1px;
        user-select: none;
    }
`;

export default CalculatorScreen;
