import React from 'react';
import classes from './Topbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Drawer from '../../UI/Drawer/Drawer';
import Logo from '../../UI/Logo/Logo';

const Topbar = (props) => {
    return(
        <div className={classes.Topbar}>
            <Drawer clicked={props.drawerClicked} />
            <Logo />
            <span className={classes.Text}>Pokedex</span>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default Topbar;