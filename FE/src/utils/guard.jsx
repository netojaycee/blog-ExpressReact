import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useProtectedRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('token');
    
    if (!isAuthenticated) {
      navigate('/admin/login'); // Redirect to the dashboard if authenticated
    }
  }, [navigate]);
};

export default useProtectedRoute;
