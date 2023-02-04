import React, { useContext } from 'react';
import AuthContext from '../../../contexts/AuthContext';

function Componente() {

    const valores = useContext(AuthContext);
    
    return (
        <>
        <br />

            <h1>Componente - {valores.user}</h1>  
            
        </>
    );
}

export default Componente;