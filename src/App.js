import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import AuthContext from './contexts/AuthContext';
import Home from './pages/Home';
import Receitas from './pages/Receitas';
import Login from './pages/Login';

import Despesas from './pages/Despesas';
import DespesasForm from './pages/Despesas/form';

function App() {

  const[logged, setLogged] = useState(true);
  const[user, setUser] = useState('Admin');

  return (
    <div className="App">
      <AuthContext.Provider value={{ logged, setLogged, user, setUser }}>
        {/* {true === true ? 'É' : 'É Nao'} */}
        {logged === false 
          ? 
          <Login /> 
          :         
          <BrowserRouter>
            <Link to="/">Home</Link>
            <Link to="/receitas">Receitas</Link>
            <Link to="/despesas">Despesas</Link>
            
            <Routes>
              {/* http://localhost:3000/ */}
              <Route path='/' element={<Home />} />

              {/* http://localhost:3000/receitas */}
              <Route path='/receitas' element={<Receitas />} />

              <Route path='/despesas' element={<Despesas />} />
              <Route path='/despesas/novo' element={<DespesasForm />} />
              <Route path='/despesas/edit/:id' element={<DespesasForm />} />
            </Routes>
          </BrowserRouter>
        }        
      </AuthContext.Provider>
    </div>
  );
}

export default App;
