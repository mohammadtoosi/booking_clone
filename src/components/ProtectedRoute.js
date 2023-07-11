import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("u_t");
    const location = useLocation();

    if (!token) {
        return <Navigate to="/signin" replace state={{from: location}} />;
    }

    return children;
};

export default ProtectedRoute;
