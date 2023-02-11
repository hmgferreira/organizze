import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import AuthContext from './contexts/AuthContext';
import AppRoutes from './routes/AppRoutes';

function App() {

  const[logged, setLogged] = useState(false);
  const[user, setUser] = useState('Admin');

  function loginApp() {
    localStorage.setItem('token_organizze', 'DASDASDADHUOHD123639216');
    setLogged(true);
  }

  function logout() {
    localStorage.removeItem('token_organizze');
    setLogged(false);
  }

  useEffect(() => {
    if(localStorage.getItem('token_organizze')) {
      setLogged(true);
    }
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider value={{ logged, setLogged, user, setUser, loginApp, logout }}>
        <AppRoutes />     
      </AuthContext.Provider>
    </div>
  );
}

export default App;
