import React from 'react';
import style from './search.module.css'
import {useActions} from "../../hooks/useActions.jsx";
function Search() {
    const [value, setValue] = React.useState('')
    const {searchMeal} = useActions()
    function handleSubmit (e){
        e.preventDefault()
        searchMeal(value)
    }
    return (
        <div className={style.container}>
            <h3 className={style.title}>Find your Meal</h3>
            <form onSubmit={handleSubmit}>
                <input type="search"
                       placeholder={'search your meal'}
                       value={value}
                       onChange={e => setValue(e.target.value)}
                       className={style.input}
                       required/>
                <input
                    type="submit"
                    value={'Search'}
                    className={style.button}
                />
            </form>
        </div>

    );
}

export default Search;