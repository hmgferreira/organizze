import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';

function Receitas() {

    const [id, setId] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    
    const [lista, setLista] = useState([]);



    async function getLista() {
        const response = await axios.get("http://localhost:4000/receitas");
        setLista(response.data);
    }

    async function salvarReceita(e) {
        e.preventDefault();
        if(id === '') {
            await axios.post("http://localhost:4000/receitas", {
                descricao: descricao,
                valor: valor
            });
        } else {
            await axios.put("http://localhost:4000/receitas/"+id, {
                descricao: descricao,
                valor: valor
            });
        }
        
        setDescricao('');
        setValor('');
        setId('');
        getLista();
        alert("Dados Salvo com Sucesso.");
    } 

    async function editar(id) {
        const response = await axios.get("http://localhost:4000/receitas/"+id);
        setId(response.data.id);
        setDescricao(response.data.descricao);
        setValor(response.data.valor);
    }


    async function deleta(id) {
        await axios.delete("http://localhost:4000/receitas/"+id);
        getLista();
        alert("Dados Deletados com Sucesso");
    }

    useEffect(() => {
        getLista();
    }, []);

    return (
        <>
            <h1>Pagina Receitas</h1> 
            <button>Nova Receita</button>
            <br />
            <br />
            {descricao}
            <form onSubmit={salvarReceita}>
                <div>
                    <label>Descrição</label>
                    <input 
                        type="text" 
                        name="descricao" 
                        id="descricao" 
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Valor</label>
                    <input 
                        type="text" 
                        name="valor" 
                        id="valor" 
                        value={valor}
                        onChange={(e) => setValor(e.target.value)} 
                    />
                </div>
                <div>
                    <input type="submit" value="Salvar"/>
                </div>
            </form>     
            <Table hover striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>DESCRICAO</th>
                        <th>VALOR</th>
                        <th>AÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((item, indice) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.descricao}</td>
                            <td>{item.valor}</td>
                            <td>
                                <Button variant="primary" onClick={() => editar(item.id)}>Editar</Button>
                                <Button variant="danger" onClick={() => deleta(item.id)}>Excluir</Button>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
            </Table>
        </>
    );
}

export default Receitas;