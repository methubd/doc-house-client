import { Navigate } from "react-router-dom";

const AdminRoute = ({children}) => {

    return <Navigate to="/login"></Navigate>
};

export default AdminRoute;