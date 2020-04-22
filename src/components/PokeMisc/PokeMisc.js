import React from 'react';
import classes from './PokeMisc.module.css';

const PokeMisc = (props) => {
    let generation = 1;
    
    switch(props.species.generation.name.slice(props.species.generation.name.indexOf('-')+1)){
        case 'i':
            generation = 'I';
            break;

        case 'ii':
            generation = 'II';
            break;

        case 'iii':
            generation = 'III';
            break;

        case 'iv':
            generation = 'IV';
            break;

        case 'v':
            generation = 'V';
            break;

        case 'vi':
            generation = 'VI';
            break;

        case 'vii':
            generation = 'VII';
            break;

        case 'viii':
            generation = 'VIII';
            break;

        default:
            generation = 1;
    }
    
    let eggGroups = props.species.egg_groups[0].name;
    if(props.species.egg_groups.length > 1){
        eggGroups = eggGroups + ', ' + props.species.egg_groups[1].name;
    }

    return(
        <div className={classes.PokeMisc}>
            <table>
                <tbody>
                    <tr>
                        <td>Generation</td>
                        <td>:</td>
                        <td>{generation}</td>
                    </tr>
                    <tr>
                        <td>Egg Groups</td>
                        <td>:</td>
                        <td>{eggGroups}</td>
                    </tr>
                    <tr>
                        <td>Base Happiness</td>
                        <td>:</td>
                        <td>{props.species.base_happiness}</td>
                    </tr>
                    <tr>
                        <td>Capture Rate</td>
                        <td>:</td>
                        <td>{props.species.capture_rate}</td>
                    </tr>
                    <tr>
                        <td>Growth Rate</td>
                        <td>:</td>
                        <td>{props.species.growth_rate.name}</td>
                    </tr>
                    <tr>
                        <td>Hatch Counter</td>
                        <td>:</td>
                        <td>{props.species.hatch_counter}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PokeMisc;