import React from "react";
import "animate.css";
import "./RandomItem.css";

const RandomItem = ({ product }) => {
    const { picture, name, slogan } = product;
    return (
        <div className="random-product d-flex flex-column justify-content-center">
            <img
                className="mx-auto random-item-img w-50 animate__animated animate__flip"
                src={picture}
                alt={name}
            />
            <h5 className="text-center my-3 animate__animated animate__fadeIn">
                {name}
            </h5>
            <p className="text-center fst-italic random-item-slogan mb-3 lh-1">
                "{slogan}"
            </p>
        </div>
    );
};

export default RandomItem;
