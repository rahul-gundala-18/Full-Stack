import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '240px',
                height: '100vh',
                padding: '24px 16px',
                boxSizing: 'border-box',
                backgroundColor: '#1e293b',
                color: '#fff',
                boxShadow: '2px 0 8px rgba(0, 0, 0, 0.15)',
            }}
        >
            <header>
                <h1 style={{ margin: '0 0 32px', fontSize: '24px' }}>My Demo App</h1>
            </header>
            <nav>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: '10px' }}>
                        <Link style={linkStyle} to="/home">Home</Link>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <Link style={linkStyle} to="/about">About</Link>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <Link style={linkStyle} to="/contact">Contact</Link>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <Link style={linkStyle} to="/counter">Counter</Link>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <Link style={linkStyle} to="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
            <Link to={isLoggedIn ? '/logout' : '/login'}><div style={{ position: 'fixed', top: '20px', right: '24px' }}>
                <button
                    style={buttonStyle}
                    onClick={() => setIsLoggedIn(!isLoggedIn)}
                >
                    {isLoggedIn ? 'Logout' : 'Login'}
                </button>
            </div></Link>
        </div>
    );
};

const linkStyle = {
    display: 'block',
    padding: '12px 16px',
    borderRadius: '6px',
    color: '#e2e8f0',
    textDecoration: 'none',
};

const buttonStyle = {
    border: 'none',
    borderRadius: '6px',
    padding: '10px 18px',
    backgroundColor: '#2563eb',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '14px',
};

export default Header;