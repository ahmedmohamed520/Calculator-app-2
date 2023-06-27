import React from "react";
import { styled } from "styled-components";

const ThemeChanger = ({ onClick, theme }) => {
    return (
        <Wrapper onClick={onClick}>
            <div className="nums">
                <div className="num">1</div>
                <div className="num">2</div>
                <div className="num">3</div>
            </div>
            <div className={`circle toggle-circle-${theme}`}></div>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    position: relative;
    background-color: var(--bg-keybad-toggle);
    width: 70px;
    height: 25px;
    border-radius: 200px;
    cursor: pointer;

    .nums {
        display: flex;
        gap: 1rem;
        position: absolute;
        top: -1rem;
        left: 0.75rem;
        color: var(--clr-white);
        font-size: 0.8rem;
    }
    .circle {
        width: 15px;
        height: 15px;
        border-radius: 100%;
        background-color: var(--key-bg-toggle);
        position: absolute;
        top: 5px;
    }
`;

export default ThemeChanger;
