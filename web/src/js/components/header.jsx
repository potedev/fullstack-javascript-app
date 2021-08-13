import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { removeLocalStorageItem } from '../utils/localStorage';
import { Redirect } from 'react-router-dom';
import { useAuth } from './authRoute'

const Header = (props) => {
    const [redirect, setRedirect] = useState(false)
    const isLogged = useAuth();

    if (redirect) {
        return <Redirect to="/login" />
    }

    const disconnect = () => {
        removeLocalStorageItem('user');
        setRedirect(true)
    }

    return (
        <header style={{ backgroundColor: 'grey', color: 'white', display: 'flex', alignItems: 'center' }}>
            <div>
                {props.name || 'Default app name'}
            </div>
            <nav style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
                <li>
                    {!isLogged ?
                        <Link to="/login">Login</Link>
                        :
                        <button onClick={disconnect}>Disconnect</button>
                    }
                </li>
                <li >
                    <Link to="/register">register</Link>
                </li>
            </nav>
        </header>
    );
}

export { Header };