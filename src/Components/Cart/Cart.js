import {
    faArrowsRotate,
    faShoppingCart,
    faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CartItems from "../CartItems/CartItems";
import "./Cart.css";

const Cart = ({ cart, handleDeleteFromCart }) => {
    return (
        <div>
            <h4>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                Selected items:{" "}
            </h4>
            <div className="cart-items mt-4">
                {cart.map((product) => (
                    <CartItems
                        key={product.index}
                        product={product}
                        handleDeleteFromCart={handleDeleteFromCart}
                    ></CartItems>
                ))}
            </div>
            <div className="d-grid gap-2 mb-3">
                <button className="btn btn-success" type="button">
                    Choose One For Me{" "}
                    <FontAwesomeIcon icon={faShuffle}></FontAwesomeIcon>
                </button>
            </div>
            <div className="d-grid gap-2">
                <button className="btn btn-danger" type="button">
                    Choose Again{" "}
                    <FontAwesomeIcon icon={faArrowsRotate}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Cart;
