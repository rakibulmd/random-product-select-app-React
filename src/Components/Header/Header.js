import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="header container text-center mt-sm-2 mt-md-4">
            <h1 className="logo fw-bold">
                The <span className="text-primary">Unpredictable</span> Shop
            </h1>
            <h2>Choose any 4 items</h2>
        </header>
    );
};

export default Header;
