import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './index.css';
import {setCookie} from '../../service/cookies';

const Login = () => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const [info, setInfo] = useState({
        showError: false,
        message: ''
    });

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login Data:', loginData);
        fetchLoginStatus();
    };
    const fetchLoginStatus = async () => {
        try {
            const response = await fetch('http://localhost:5001/api/users/login', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });
            const data = await response.json();
            console.log('Login Response:', data);
            if (data.message === 'Login successful') {
                await setCookie('token', data.token, Number(15/1440));
                console.log('Logged in cookie set:', localStorage.getItem('isLoggedin'));
                localStorage.setItem('isLoggedin', 'true');
                window.dispatchEvent(new Event('loginStatusChange'));
                navigate('/home');
                
            } else {
                setInfo({
                    showError: true,
                    message: data.err_message || 'An error occurred during login.'
                });
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };
    return (
        <div className="login">
            <h1>Login Page</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="login-field">
                    <label htmlFor="email">email:</label>
                    <input className="login-input" type="email" id="email" name="email" onChange={handleChange} />
                </div>
                <div className="login-field">
                    <label htmlFor="password">Password:</label>
                    <input className="login-input" type="password" id="password" name="password" onChange={handleChange} />
                </div>
                <button className="login-button" type="submit">Login</button>
                {info.showError && <p className="error-message">{info.message}</p>}
            </form>
        </div>
    );
};

export default Login;