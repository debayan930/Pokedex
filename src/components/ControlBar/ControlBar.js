import React from 'react';
import classes from './ControlBar.module.css';
import Search from '../UI/Search/Search';

const ControlBar = (props) => {
    return(
        <div className={classes.ControlBar}>
            <Search search={props.search} searchChange={props.searchChange} />
            <select
                value={props.type}
                onChange={props.typeChange}
            >
                <option>All</option>
                <option>fire</option>
                <option>water</option>
                <option>grass</option>
                <option>bug</option>
                <option>poison</option>
                <option>electric</option>
                <option>steel</option>
                <option>flying</option>
                <option>rock</option>
                <option>ground</option>
                <option>normal</option>
                <option>fairy</option>
                <option>ice</option>
                <option>dragon</option>
                <option>fighting</option>
                <option>psychic</option>
                <option>ghost</option>
                <option>dark</option>
            </select>
        </div>
    );
};

export default ControlBar;