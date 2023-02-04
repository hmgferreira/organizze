import React from 'react';

function Welcome(props) {
    console.log(props);
    return (
        <>
            <h2>Olá, {props.nome} {props.sobrenome}</h2>
            <h3>Seja bem vindo!</h3>
        </>
    );
}

export default Welcome;