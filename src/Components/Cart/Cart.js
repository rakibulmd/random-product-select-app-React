import {
    faArrowsRotate,
    faShoppingCart,
    faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { deleteCartItemFromLocalStorage } from "../../Utilities/processLocalStorage";
import CartItems from "../CartItems/CartItems";
import RandomItem from "../RandomItem/RandomItem";
import "./Cart.css";
import "animate.css";

const Cart = ({ cart, handleDeleteFromCart, chooseRandomOne, setCart }) => {
    let randomProduct = cart.find((product) => product.isRandom === true);
    return (
        <div className="cart animate__animated animate__fadeInRight" id="cart">
            {!randomProduct ? (
                <h5>
                    Selected items: <br />
                    <span className="me-3">
                        <FontAwesomeIcon
                            icon={faShoppingCart}
                        ></FontAwesomeIcon>
                    </span>
                    {cart.length} / 4
                </h5>
            ) : (
                <h5 className="text-center">Congrats! You got :</h5>
            )}
            {!randomProduct ? (
                <div className="cart-items mt-4">
                    {cart.map((product) => (
                        <CartItems
                            key={product.id}
                            product={product}
                            handleDeleteFromCart={handleDeleteFromCart}
                        ></CartItems>
                    ))}
                </div>
            ) : (
                <div className="cart-items mt-4">
                    {cart.map((product) => (
                        <RandomItem
                            key={product.id}
                            product={product}
                            handleDeleteFromCart={handleDeleteFromCart}
                        ></RandomItem>
                    ))}
                </div>
            )}
            {!randomProduct ? (
                <div className="d-grid gap-2 mb-2">
                    <button
                        onClick={chooseRandomOne}
                        className="btn btn-success"
                        type="button"
                    >
                        Choose A Random One{" "}
                        <FontAwesomeIcon icon={faShuffle}></FontAwesomeIcon>
                    </button>
                </div>
            ) : (
                ""
            )}
            <div
                onClick={() => {
                    setCart([]);
                    deleteCartItemFromLocalStorage();
                }}
                className="d-grid gap-2"
            >
                <button className="btn btn-danger" type="button">
                    Choose Again{" "}
                    <FontAwesomeIcon icon={faArrowsRotate}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Cart;
