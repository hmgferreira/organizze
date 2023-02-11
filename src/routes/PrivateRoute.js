import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import LayoutDefault from "../layouts/LayoutDefault";

function PrivateRoute(props) {
    
    const { logged } = useContext(AuthContext);

    if(props.isPrivate && logged === false) {
        return <Navigate to="/login" />
    }

    if(props.isLayout) {
        return (
            <LayoutDefault>
                {props.component}
            </LayoutDefault>
        );
    }

    return (
        <>
            {props.component}
        </>
    );
    
}

export default PrivateRoute;