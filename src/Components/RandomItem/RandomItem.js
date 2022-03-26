import React from "react";

const RandomItem = ({ product }) => {
    const { picture, name } = product;
    return (
        <div className="random-product d-flex flex-column justify-content-center">
            <img className="mx-auto" src={picture} alt={name} />
            <h4 className="text-center my-3">{name}</h4>
        </div>
    );
};

export default RandomItem;
