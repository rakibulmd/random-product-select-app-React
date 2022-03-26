import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./CartItems.css";
import "animate.css";

const CartItems = ({ product, handleDeleteFromCart }) => {
    const { picture, name } = product;
    return (
        <div className=" row d-flex align-items-center mb-3 animate__animated animate__zoomIn">
            <img className="cart-items-img w-25 col-3" src={picture} alt="" />
            <p className="col-6">{name}</p>
            <button
                onClick={() => {
                    handleDeleteFromCart(product);
                }}
                className="cart-delete-btn col-3"
            >
                {" "}
                <FontAwesomeIcon
                    className="text-white fs-4"
                    icon={faTrashCan}
                ></FontAwesomeIcon>{" "}
            </button>
        </div>
    );
};

export default CartItems;
