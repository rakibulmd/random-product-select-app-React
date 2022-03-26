import React from "react";
import "animate.css";

const RandomItem = ({ product }) => {
    const { picture, name } = product;
    return (
        <div className="random-product d-flex flex-column justify-content-center">
            <img
                className="mx-auto my-3 animate__animated animate__flip"
                src={picture}
                alt={name}
            />
            <h4 className="text-center my-3 animate__animated animate__fadeIn">
                {name}
            </h4>
        </div>
    );
};

export default RandomItem;
