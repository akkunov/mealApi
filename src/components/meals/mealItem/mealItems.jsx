import React from 'react';
import style from  './mealItems.module.css';
import {Link} from "react-router-dom";

function MealItems({
                       strMeal,
                       idMeal,
                       strArea,
                       strCategory,
                       strMealThumb,
                       strTags}) {

    return (
        <Link to={`meals/${idMeal}`}>
            <div className={style.container}>
                <img src={strMealThumb} alt="meal image"  loading={'lazy'} className={style.img}/>
                <div className={style.typogr}>
                    <span className={style.name}>{strMeal}</span>
                    <span className={style.desc}>{strTags}</span>
                    <div className={style.from}>
                        <span>{strCategory}</span>
                        <span>|</span>
                        <span>{strArea}</span>
                    </div>
                </div>
            </div>
        </Link>


    );
}

export default MealItems;