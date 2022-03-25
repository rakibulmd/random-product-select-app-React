import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Products.css";

const Products = ({ product }) => {
    const { picture, name, price } = product;
    return (
        <div className="col">
            <div className="card h-100 text-center border-none shadow-lg">
                <div className="p-3">
                    <img
                        className="product-img mx-auto"
                        src={picture}
                        alt={name}
                    />
                    <h5>{name}</h5>
                    <h4 className="text-primary">${price}</h4>
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-warning" type="button">
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
