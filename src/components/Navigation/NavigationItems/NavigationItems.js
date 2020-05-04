import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = (props) => {
    return(
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/' exact>Pokemon</NavigationItem>
            <NavigationItem link='/moves'>Moves</NavigationItem>
            <NavigationItem link='/abilities'>Abilities</NavigationItem>
            <NavigationItem link='/types'>Types</NavigationItem>
            <NavigationItem link='/semantic'>Semantic</NavigationItem>
        </ul>
    );
};

export default NavigationItems;