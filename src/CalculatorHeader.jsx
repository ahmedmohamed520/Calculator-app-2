import React, { useState } from "react";
import ThemeChanger from "./ThemeChanger";
import { styled } from "styled-components";

const CalculatorHeader = ({ themeChangeHandler, theme }) => {
    return (
        <Wrapper>
            <div className="calc-title">calc</div>
            <div className="theme-changer-box">
                <p className="theme-changer-title">THEME</p>
                <ThemeChanger onClick={themeChangeHandler} theme={theme} />
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    .calc-title {
        color: var(--clr-header);
        font-weight: 700;
        font-size: 1.5rem;
    }
    .theme-changer-box {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        color: var(--clr-header);
    }
    .theme-changer-title {
        color: var(--clr-header);
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 1px;
    }
`;
export default CalculatorHeader;
