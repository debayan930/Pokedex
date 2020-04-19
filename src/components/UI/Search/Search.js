import React from 'react';
import image from '../../../assets/images/search.png';
import classes from './Search.module.css';

const Search = (props) => {
    return(
        <div className={classes.Search}>
            <img src={image} alt='search' />
            <input
                type='search'
                value={props.search}
                onChange={props.searchChange}
                placeholder='Search Pokemon...'
            />
        </div>
    );
};

export default Search;