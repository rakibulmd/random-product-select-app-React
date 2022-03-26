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
                <div className="p-2">
                    <img
                        className="product-img mx-auto w-50"
                        src={picture}
                        alt={name}
                    />
                    <h6 className="mt-3">{name}</h6>
                    <h4 className="text-primary my-3">${price}</h4>
                    <p className="product-description lh-sm"> {description}</p>
                </div>
                <div className="d-grid gap-2 product-btn">
                    <button
                        onClick={() => {
                            handleAddToCart(product);
                        }}
                        className="btn btn-success fs-6 p-2"
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
