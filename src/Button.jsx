import React from "react";

const Button = ({ value, clickHandler, classes = "btn" }) => {
    return (
        <div
            onClick={() => {
                clickHandler(value);
            }}
            className={classes}
        >
            {value}
        </div>
    );
};

export default Button;
