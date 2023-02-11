import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import AuthContext from './contexts/AuthContext';
import AppRoutes from './routes/AppRoutes';

function App() {

  const[logged, setLogged] = useState(true);
  const[user, setUser] = useState('Admin');

  return (
    <div className="App">
      <AuthContext.Provider value={{ logged, setLogged, user, setUser }}>
        <AppRoutes />     
      </AuthContext.Provider>
    </div>
  );
}

export default App;
