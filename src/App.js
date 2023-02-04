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
function App() {

  const[logged, setLogged] = useState(false);
  const[user, setUser] = useState('Admin');

  return (
    <div className="App">
      <AuthContext.Provider value={{ logged, setLogged, user, setUser }}>
        {logged === false 
          ? 
          <Login /> 
          :         
          <BrowserRouter>

            <Link to="/">Home</Link>
            <Link to="/receitas">Receitas</Link>
            <button onClick={() => setLogged(false)}>Sair</button>
            <Routes>
              {/* http://localhost:3000/ */}
              <Route path='/' element={<Home />} />

              {/* http://localhost:3000/receitas */}
              <Route path='/receitas' element={<Receitas />} />
            </Routes>
          </BrowserRouter>
        }        
      </AuthContext.Provider>
    </div>
  );
}

export default App;
