import React from 'react';
import classes from './PokeSprites.module.css';

const PokeSprites = (props) => {
    return(
        <div className={classes.PokeSprites}>
            <span>SPRITES</span>
            <div className={classes.Content}>
                <div className={classes.ImgBlock}>
                    <img src={props.sprites.front_default} alt='normal' />
                    <span>Normal</span>
                </div>
                <div className={classes.ImgBlock}>
                    <img src={props.sprites.front_shiny} alt='shiny' />
                    <span>Shiny</span>
                </div>
            </div>
        </div>
    );
};

export default PokeSprites;