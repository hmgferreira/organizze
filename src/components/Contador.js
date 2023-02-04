import React from 'react';

function Contador() {
    // STATES - ESTADOS DE UM COMPONENTE
    const[numero, setNumero] = React.useState(0);
    function adicionar() {
        setNumero(numero + 1);
    }
    function resetar() {
        setNumero(0);
    }
    function remover() {
        if(numero > 0 ) {
            setNumero(numero - 1);
        }
    }
    return (
        <>
            O Valor do Número é: {numero}
            <br />
            <button onClick={adicionar}>Adicionar</button>
            <button onClick={resetar}>Resetar</button>
            <button onClick={remover}>Remover</button>
        </>
    );
}

export default Contador;
