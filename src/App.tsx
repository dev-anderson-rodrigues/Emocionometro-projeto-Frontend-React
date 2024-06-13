import React, { useState } from 'react';
import LoginForm from './assets/modules/login/LoginForm';
// import * as S from './App';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleLogin = (email: string, password: string) => {
    // Simulação de autenticação (normalmente você chamaria uma API aqui)
    if (email === 'user@example.com' && password === 'password') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <h1>Welcome, you are logged in!</h1>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
