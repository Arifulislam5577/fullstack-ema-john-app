import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../authentication/firebase";
import useFetchData from "../hooks/useFetchData";
import {
  addCart,
  calcTotal,
  deleteItem,
  getCart,
  manageQty,
  saveCart,
} from "../utils/productSerivce";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(false);
  const { data, loading, error } = useFetchData("/api/v1/products");
  const products = data?.data?.products;
  const [cart, setCart] = useState(getCart());
  const handleAddToCart = (id) => {
    addCart(id, cart, setCart, products);
  };
  const handleQuantity = (id, value) => {
    manageQty(id, value, cart, setCart);
  };
  const removeFromCart = (id) => {
    deleteItem(id, cart, setCart);
  };

  const handleLogOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      setError(error.message);
    }
  };
  const totalPrice = calcTotal(cart, "price");
  const shippingCharge = totalPrice > 500 ? 0 : 50;
  const vatCharge = parseInt(totalPrice * 0.05);
  const totalAmount = calcTotal(cart, "quantity");
  const total = parseInt(totalPrice + shippingCharge + vatCharge);
  console.log(shippingCharge);
  saveCart(cart);

  useEffect(() => {
    setLoader(true);
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    setLoader(false);

    return () => subscribe();
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        loader,
        user,
        error,
        cart,
        handleQuantity,
        handleAddToCart,
        removeFromCart,
        total,
        totalPrice,
        totalAmount,
        handleLogOut,
        shippingCharge,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
