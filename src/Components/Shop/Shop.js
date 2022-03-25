import React, { useEffect, useState } from "react";
import Products from "../Products/Products";

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <main className="shop container mx-auto row mt-5">
            <div className="col-sm-12 col-md-9">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {products.map((product) => (
                        <Products key={product.id} product={product}></Products>
                    ))}
                </div>
            </div>
            <div className="col-sm-12 col-md-3">
                <p>this is cart</p>
            </div>
        </main>
    );
};

export default Shop;
