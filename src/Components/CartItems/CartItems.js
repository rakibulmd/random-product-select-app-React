import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./CartItems.css";

const CartItems = ({ product, handleDeleteFromCart }) => {
    const { picture, name } = product;
    return (
        <div className=" row d-flex align-items-center mb-3">
            <img className="w-25 col-3" src={picture} alt="" />
            <p className="col-6">{name}</p>
            <button
                onClick={() => {
                    handleDeleteFromCart(product);
                }}
                className="cart-delete-btn col-3"
            >
                {" "}
                <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>{" "}
            </button>
        </div>
    );
};

export default CartItems;
