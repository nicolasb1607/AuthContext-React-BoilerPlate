

/*********** App.tsx **************/

import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/useAuth';

const App = () => {
  const { user, login, logout, setUser } = useAuth();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </AuthContext.Provider>
  );
};

export default App;




/*************** Login.tsx  ****************/

import { useAuth } from '../hooks/useAuth';

const Login = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    login({
      id: '1',
      name: 'John Doe',
      email: 'john.doe@email.com',
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;


/*************** Logout.tsx  ****************/

import { useAuth } from '../hooks/useAuth';

const LogoutButton = () => {
  const { logout } = useAuth();

  return <button onClick={logout}>Logout</button>;
};

export default LogoutButton;

