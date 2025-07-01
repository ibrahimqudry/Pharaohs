import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user was previously authenticated
  useEffect(() => {
    const authStatus = localStorage.getItem('pharaohsAuth');
    const authExpiry = localStorage.getItem('pharaohsAuthExpiry');
    if (authStatus === 'true' && authExpiry) {
      const now = Date.now();
      if (now < parseInt(authExpiry, 10)) {
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem('pharaohsAuth');
        localStorage.removeItem('pharaohsAuthExpiry');
      }
    }
  }, []);

  const login = (password) => {
    if (password === 'pharaohsAdmin') {
      setIsAuthenticated(true);
      localStorage.setItem('pharaohsAuth', 'true');
      // Set expiry for 12 hours from now
      const expiry = Date.now() + 12 * 60 * 60 * 1000;
      localStorage.setItem('pharaohsAuthExpiry', expiry.toString());
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('pharaohsAuth');
    localStorage.removeItem('pharaohsAuthExpiry');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}