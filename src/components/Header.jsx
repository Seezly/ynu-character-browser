import React from 'react';
import Title from './Title';
import './header.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <Title />
            </header>
        )
    }
};

export default Header;