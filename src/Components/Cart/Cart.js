import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
    return (
        <div>
            <h2>
                {" "}
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Your
                Cart:{" "}
            </h2>
            <h2>{cart.length}</h2>
        </div>
    );
};

export default Cart;
