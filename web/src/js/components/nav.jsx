import React from 'react';
import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <nav style={{ backgroundColor: 'red', padding: '10px' }}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/posts">posts</Link>
                </li>
            </ul>
        </nav>
    );
}

export { Nav };