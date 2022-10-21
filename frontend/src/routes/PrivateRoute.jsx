import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { DataContext } from "../context/ContextApi";
import FallBackLoaded from "../components/FallBackLoader";
const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(DataContext);
  if (loader) {
    return <FallBackLoaded />;
  } else {
    return user ? children : <Navigate to="/login" />;
  }
};

export default PrivateRoute;
