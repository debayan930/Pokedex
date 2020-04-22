import React from 'react';
import classes from './PokeStats.module.css';
import PokeStat from './PokeStat/PokeStat';

const PokeStats = (props) => {    
    let totalStat = {
        base_stat: 0,
        stat: {
            name: 'total'
        }
    }
    
    return(
        <div className={classes.PokeStats}>
            <span className={classes.Header}>BASE STATS</span>
            <div className={classes.Content}>
                {props.stats.reverse().map(stat => {
                    totalStat.base_stat = totalStat.base_stat + stat.base_stat;
                    return(
                        <PokeStat
                            key={stat.stat.name}
                            stat={stat}
                        />
                    )
                })}
                <PokeStat key='total' stat={totalStat} />
            </div>
        </div>
    );
};

export default PokeStats;