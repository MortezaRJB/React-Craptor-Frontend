import { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

interface Props{
  children: ReactNode;
}

function AuthProvider({ children }: Props) {
  const [user, setUser] = useState(localStorage.getItem('user') || {});
  const [token, setToken] = useState(localStorage.getItem('access') || '');
  const navigate = useNavigate();

  const loginAction = async (data) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/accounts/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      if (response.ok){
        if (res) {
          setUser(res.user);
          localStorage.setItem('user', JSON.stringify(res.user));
          setToken(res.access);
          localStorage.setItem('access', res.access);
          navigate('/market');
          return 'ok';
        }
      }
      return res;
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = () => {
    setUser(null);
    setToken('');
    localStorage.removeItem('access');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return(
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
