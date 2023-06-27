import React, { useState } from "react";
import { styled } from "styled-components";
import CalculatorHeader from "./CalculatorHeader";
import CalculatorScreen from "./CalculatorScreen";
import CalculatorBody from "./CalculatorBody";

const App = () => {
    const [theme, setTheme] = useState(1);
    const [inputValue, setInputValue] = useState(0);
    const [result, setResult] = useState(0);
    const [operator, setOperator] = useState();

    const themeChangeHandler = () => {
        setTheme((theme) => (theme + 1 < 4 ? theme + 1 : 1));
        document.documentElement.className =
            theme + 1 === 2 ? "theme-2" : theme + 1 === 3 ? "theme-3" : "theme-1";
    };
    return (
        <Wrapper>
            <div className="calculator">
                {/* Calculator header */}
                <CalculatorHeader themeChangeHandler={themeChangeHandler} theme={theme} />
                {/* Calculator Screen */}
                <CalculatorScreen inputValue={inputValue} result={result} operator={operator} />

                <CalculatorBody
                    setInputValue={setInputValue}
                    inputValue={inputValue}
                    setResult={setResult}
                    setOperator={setOperator}
                    operator={operator}
                    result={result}
                />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: var(--bg-main);
    padding: 4rem 0;
    min-height: 100vh;

    .calculator {
        width: 480px;
        max-width: 90%;
        margin: 0 auto;
    }
`;

export default App;
