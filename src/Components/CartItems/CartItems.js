import { faRecycle, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./CartItems.css";

const CartItems = ({ product, handleDeleteFromCart }) => {
    const { picture, name } = product;
    return (
        <div className="d-flex gap-5 mb-3">
            <img className="w-25" src={picture} alt="" />
            <p>{name}</p>
            <button
                onClick={() => {
                    handleDeleteFromCart(product);
                }}
                className="cart-delete-btn"
            >
                {" "}
                <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>{" "}
            </button>
        </div>
    );
};

export default CartItems;
