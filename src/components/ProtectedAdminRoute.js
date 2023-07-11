import { Navigate, useLocation } from "react-router-dom";

const ProtectedAdminRoute = ({ children }) => {
    const token = localStorage.getItem("a_t");
    const location = useLocation();

    if (!token) {
        return <Navigate to="/dashboard/login" replace state={{ from: location }} />;
    }

    return children;
};

export default ProtectedAdminRoute;
