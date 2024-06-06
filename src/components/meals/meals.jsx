import React  from 'react';
import style from './meals.module.css';
import MealItems from "./mealItem/mealItems.jsx";
import {useSelector} from "react-redux";
import Preloader from "../preloader/index.jsx";

function Meals() {
    const {data, isLoading, error, isRetryed} = useSelector(state => state.meals.data);
    if(!isRetryed){
        return
    }
    if (isLoading) {
        return (
            <div className={style.center}>
                <Preloader />
            </div>
        );
    }

    return (
        <div className={style.container}>
            {data.length !== 0 &&
                data.map(items => <MealItems {...items} key={items.idMeal} /> )
            }
            {error && <span>{error}</span>}
        </div>
    );
}

export default Meals;