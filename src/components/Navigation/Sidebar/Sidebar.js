import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './Sidebar.module.css';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Sidebar = (props) => {
    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div
                className={classes.Sidebar}
                style={{
                    transform: props.open ? 'translateX(0)' : 'translate(-100%)'
                }}
            >
                <Logo />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default Sidebar;