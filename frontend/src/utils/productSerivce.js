export const findProduct = (arr, id) => {
  const product = arr.find((pd) => pd._id === id);
  return product;
};

export const addCart = (id, cart, setCart, products) => {
  let newCart = [];
  const product = findProduct(products, id);
  const productInCart = findProduct(cart, id);

  if (!productInCart) {
    product.quantity = 1;
    newCart = [...cart, product];
  } else {
    const restProduct = cart.filter((pd) => pd._id !== productInCart._id);
    productInCart.quantity += 1;
    newCart = [...restProduct, productInCart];
  }
  setCart(newCart);
};

export const manageQty = (id, value, cart, setCart) => {
  const product = findProduct(cart, id);
  if (value === "increment") {
    product.quantity += 1;
    setCart([...cart]);
  } else {
    product.quantity -= 1;
    setCart([...cart]);
  }
};

export const calcTotal = (arr, value) => {
  if (value === "price") {
    return arr.reduce((prev, cur) => cur.price * cur.quantity + prev, 0);
  } else {
    return arr.reduce((prev, cur) => cur.quantity + prev, 0);
  }
};

export const deleteItem = (id, cart, setCart) => {
  const restCart = cart.filter((pd) => pd._id !== id);
  setCart(restCart);
};

export const getCart = () => {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
};

export const saveCart = (arr) => {
  localStorage.setItem("cart", JSON.stringify(arr));
};
