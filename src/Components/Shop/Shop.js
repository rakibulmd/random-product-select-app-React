import React, { useEffect, useState } from "react";
import { addToLocalStorage } from "../../Utilities/processLocalStorage";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";

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
    return (
        <main className="shop container mx-auto row mt-5">
            <div className="col-sm-12 col-md-9">
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
                <Cart cart={cart}></Cart>
            </div>
        </main>
    );
};

export default Shop;
