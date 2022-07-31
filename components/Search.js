import classes from './Search.module.css';

const Search = ({onFocus, onChange, onKeyDown, value}) => {
    return(
        <input className={classes.input}
            type="text"
            placeholder="Enter a city"
            value={value}
            onFocus={onFocus}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    )
}

export default Search;