import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Products.css";
import "animate.css";

const Products = ({ product, handleAddToCart }) => {
    const { picture, name, price, description } = product;
    return (
        <div className="col animate__animated animate__fadeInUp">
            <div className="card product-container h-100 text-center border-none shadow-lg">
                <div className="p-3">
                    <img
                        className="product-img mx-auto w-75"
                        src={picture}
                        alt={name}
                    />
                    <h5 className="mt-3">{name}</h5>
                    <h3 className="text-primary my-3">${price}</h3>
                    <p className="product-description"> {description}</p>
                </div>
                <div className="d-grid gap-2 product-btn">
                    <button
                        onClick={() => {
                            handleAddToCart(product);
                        }}
                        className="btn btn-success"
                        type="button"
                    >
                        Add to Cart{" "}
                        <FontAwesomeIcon
                            icon={faShoppingCart}
                        ></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Products;
