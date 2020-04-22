import React from 'react';
import classes from './PokeStat.module.css';
import Aux from '../../../hoc/Auxiliary';

const PokeStat = (props) => {
    let statLabel = '';

    switch(props.stat.stat.name){
        case 'hp':
            statLabel = 'HP';
            break;

        case 'attack':
            statLabel = 'ATK';
            break;

        case 'defense':
            statLabel = 'DEF';
            break;

        case 'special-attack':
            statLabel = 'SPA';
            break;

        case 'special-defense':
            statLabel = 'SPD';
            break;

        case 'speed':
            statLabel = 'SPE';
            break;

        case 'total':
            statLabel = 'TOT';
            break;

        default:
            statLabel = '';
    }

    let color = '#ccc';
    if(props.stat.base_stat <= 50){
        color = '#9e0606';
    } else if(props.stat.base_stat < 80){
        color = '#cf4011';
    } else if(props.stat.base_stat < 100){
        color = '#c2ac19';
    } else if(props.stat.base_stat < 110){
        color = '#38a128';
    } else if(props.stat.base_stat < 150){
        color = '#31913e';
    } else if(props.stat.base_stat < 200){
        color = '#30ba9c';
    } else{
        color = '#2cb8b8';
    }

    const zeroPart = props.stat.base_stat.toString().length === 2 ? '0' : props.stat.base_stat.toString().length === 1 ? '00' : '';
    
    return(
        <div className={classes.PokeStat}>
            <span>{statLabel === 'HP' ? <Aux><span className={classes.Transparent}>A</span>{statLabel}</Aux> : statLabel}</span>
            <span><span className={classes.Transparent}>{zeroPart}</span>{props.stat.base_stat}</span>
            <div className={classes.Bar}>
                <div
                    className={classes.Stat}
                    style={{
                        width: statLabel === 'TOT' ? (props.stat.base_stat/1530)*200 : (props.stat.base_stat/255)*200,
                        backgroundColor: color
                    }}
                >
                </div>
            </div>
        </div>
    );
};

export default PokeStat;