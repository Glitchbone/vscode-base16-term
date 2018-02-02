import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {

    return (
        <nav>
            {props.items.map((item) => <NavLink to={`/${item.id}`} key={item.id}>{item.name}</NavLink>)}
        </nav>
    )
}

export default Nav;