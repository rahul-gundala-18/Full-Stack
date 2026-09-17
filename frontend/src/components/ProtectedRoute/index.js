import Login from '../Login';
import {getCookie} from '../../service/cookies';
import {Navigate, Outlet} from 'react-router-dom';

const ProtectedRoute = async () => {
    const token = await getCookie('token');
    if(!token) {
        return <Navigate path="/login" element={<Login />} replace />;
    } else {
        return <Outlet />;
    }
};

export default ProtectedRoute;