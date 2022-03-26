import React, { useEffect, useState } from "react";
import { Alert } from "../../Utilities/Alert";
import {
    addToLocalStorage,
    deleteCartItemFromLocalStorage,
    deleteFromLocalStorage,
    getLocalStorageCart,
} from "../../Utilities/processLocalStorage";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const handleAddToCart = (product) => {
        let randomProduct = cart.find((product) => product.isRandom === true);
        if (randomProduct) {
            Alert("Clear cart by clicking choose again");
        } else {
            delete product.isRandom;
            addToLocalStorage(product.id);
            if (cart.indexOf(product) === -1) {
                cart.length <= 3
                    ? setCart([...cart, product])
                    : Alert("You already have 4 items in cart");
            } else {
                Alert("This item is already in cart");
            }
        }
    };

    useEffect(() => {
        let localCart = getLocalStorageCart();
        let newCart = [];
        for (const id in localCart) {
            let foundProduct = products.find((product) => product.id === id);
            if (foundProduct) {
                newCart.push(foundProduct);
            }
        }
        setCart(newCart);
    }, [products]);
    const handleDeleteFromCart = (toDeleteProduct) => {
        let newCart = cart.filter((product) => product !== toDeleteProduct);
        setCart(newCart);
        deleteFromLocalStorage(toDeleteProduct.id);
    };
    const chooseRandomOne = () => {
        let newCart = [...cart];

        if (newCart.length >= 1) {
            let item = newCart[Math.floor(Math.random() * newCart.length)];
            item.isRandom = true;
            setCart([]);
            deleteCartItemFromLocalStorage();
            setCart([item]);
        } else {
            Alert("Select  items first");
        }
    };
    return (
        <main className="shop container mx-auto row mt-3">
            <div className="col-sm-12 col-lg-9 products-container mb-sm-5">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {products.map((product) => (
                        <Products
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Products>
                    ))}
                </div>
            </div>
            <div className="col-sm-12 col-lg-3">
                <div className="cart-container">
                    <Cart
                        cart={cart}
                        handleDeleteFromCart={handleDeleteFromCart}
                        chooseRandomOne={chooseRandomOne}
                        setCart={setCart}
                    ></Cart>
                </div>
            </div>
        </main>
    );
};

export default Shop;
