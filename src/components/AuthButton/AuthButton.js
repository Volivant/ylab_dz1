import React from "react";
import "./AuthButton.css";

function AuthButton({children, onClick}) {
    const handleClick = () => {
        onClick();
    }

    return (
        <button className="btn" onClick={handleClick}>
            {children}
        </button>
    );
}

export default AuthButton;