import React from 'react';
import {Navigate, NavLink, Route, Routes} from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <h1 className='logo'>Rick & Morty <span className={'blueColor'}>WiKi</span></h1>
            <nav>
                <ul>
                    <li><NavLink to={'/character'}>Character</NavLink></li>
                    <li><NavLink to={'/episode'}>Episode</NavLink></li>
                    <li><NavLink to={'/location'}>Location</NavLink></li>

                </ul>
            </nav>
        </header>
    );
};
