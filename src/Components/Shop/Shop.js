import React, { useEffect, useState } from "react";
import {
    addToLocalStorage,
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
        addToLocalStorage(product.id);
        if (cart.indexOf(product) === -1) {
            cart.length <= 3
                ? setCart([...cart, product])
                : console.log("cart already have maximum items");
        } else {
            console.log("product already in cart");
        }
    };

    useEffect(() => {
        let localCart = getLocalStorageCart();
        let newCart = [];
        for (const id in localCart) {
            let product = products.find((product) => product.id === id);
            newCart.push(product);
        }
        console.log(newCart);
        setCart(newCart);
    }, [products]);
    const handleDeleteFromCart = (product) => {
        let newCart = [...cart];
        delete newCart[newCart.indexOf(product)];
        setCart(newCart);
    };
    return (
        <main className="shop container mx-auto row mt-5">
            <div className="col-sm-12 col-md-9 products-container">
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
                    ></Cart>
                </div>
            </div>
        </main>
    );
};

export default Shop;
