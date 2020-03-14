import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className="header-info">
            <h1>My Employers</h1>
            <br/>
            <a href="/user">Users</a>
            <a href="/name">Names</a>
            <a href="/contact">Contact Numbers</a>
        </div>
    );
};

export default Header;