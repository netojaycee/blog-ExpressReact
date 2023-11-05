import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useProtectedRouteLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('token');
    
    if (isAuthenticated) {
      navigate('/admin/dashboard'); // Redirect to the dashboard if authenticated
    }
  }, [navigate]);
};

export default useProtectedRouteLogin;
