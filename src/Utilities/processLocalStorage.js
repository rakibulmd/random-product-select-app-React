const getLocalStorageCart = () => {
    let cart;
    const localStorageCart = localStorage.getItem("user-cart");
    localStorageCart ? (cart = JSON.parse(localStorageCart)) : (cart = {});
    return cart;
};

const addToLocalStorage = (id) => {
    const cart = getLocalStorageCart();
    const quantity = cart[id];
    quantity ? console.log("already exist in local storage") : (cart[id] = 1);
    localStorage.setItem("user-cart", JSON.stringify(cart));
};

export { getLocalStorageCart, addToLocalStorage };
