import React from 'react';
import image from '../../../assets/images/poke.png';
import classes from './Logo.module.css';
import { withRouter } from 'react-router-dom';

const Logo = (props) => {
    const goHomeHandler = () => {
        props.history.push('/');
    }
    
    return(
        <div
            className={classes.Logo}
            onClick={goHomeHandler}
        >
            <img src={image} alt='Pokemon' />
        </div>
    );
};

export default withRouter(Logo);