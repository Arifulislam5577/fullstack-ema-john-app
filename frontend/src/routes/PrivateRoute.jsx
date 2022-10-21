import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { DataContext } from "../context/ContextApi";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(DataContext);
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
