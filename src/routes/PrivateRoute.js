import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

function PrivateRoute(props) {
    
    const { logged } = useContext(AuthContext);

    if(props.isPrivate && logged === false) {
        return <Navigate to="/login" />
    }

    return (
        <>
            {props.component}
        </>
    );
}

export default PrivateRoute;