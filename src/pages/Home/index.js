import React, { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import Componente from './Componente';

function Home() {

    const { setLogged } = useContext(AuthContext);

    return (
        <>
        <br />
            <h1>Pagina Home</h1>  
            <button onClick={() => setLogged(false)}>Sair</button>
            <Componente />
        </>
    );
}

export default Home;