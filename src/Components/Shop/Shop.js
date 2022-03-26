import React, { useEffect, useState } from "react";
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
            console.log("clear the cart first");
        } else {
            delete product.isRandom;
            addToLocalStorage(product.id);
            if (cart.indexOf(product) === -1) {
                cart.length <= 3
                    ? setCart([...cart, product])
                    : console.log("cart already have maximum items");
            } else {
                console.log("product already in cart");
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
        console.log(cart);
        console.log(toDeleteProduct);
        let newCart = cart.filter((product) => product !== toDeleteProduct);
        console.log(newCart);
        setCart(newCart);
        deleteFromLocalStorage(toDeleteProduct.id);
    };
    const chooseRandomOne = () => {
        let newCart = [...cart];

        if (newCart.length === 4) {
            let item = newCart[Math.floor(Math.random() * newCart.length)];
            item.isRandom = true;
            setCart([]);
            deleteCartItemFromLocalStorage();
            setCart([item]);
        } else {
            console.log("select 4 items to shuffle");
        }
    };
    return (
        <main className="shop container mx-auto row mt-5">
            <div className="col-sm-12 col-md-9 products-container mb-sm-5">
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
            <div className="col-sm-12 col-md-3">
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
