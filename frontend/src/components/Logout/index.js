import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { removeCookie } from '../../service/cookies';
const Logout = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        removeCookie('token');
        navigate('/login');
    }, [navigate]); 

    return null;
}

export default Logout;