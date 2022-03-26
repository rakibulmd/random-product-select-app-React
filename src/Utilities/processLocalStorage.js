const getLocalStorageCart = () => {
    let cart;
    const localStorageCart = localStorage.getItem("user-cart");
    localStorageCart ? (cart = JSON.parse(localStorageCart)) : (cart = {});
    return cart;
};

const addToLocalStorage = (id) => {
    const cart = getLocalStorageCart();
    let existentId = Object.keys(cart);
    if (existentId.length < 4) {
        const quantity = cart[id];
        quantity
            ? console.log("already exist in local storage")
            : (cart[id] = 1);
    } else {
        console.log("max 4 items in cart / local storage");
    }
    localStorage.setItem("user-cart", JSON.stringify(cart));
};

const deleteFromLocalStorage = (id) => {
    const cart = getLocalStorageCart();
    delete cart[id];
    localStorage.setItem("user-cart", JSON.stringify(cart));
};

const deleteCartItemFromLocalStorage = () => {
    localStorage.removeItem("user-cart");
};

export {
    getLocalStorageCart,
    addToLocalStorage,
    deleteFromLocalStorage,
    deleteCartItemFromLocalStorage,
};
