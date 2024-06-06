import React from 'react';
import style from './dayMeal.module.css'
import {Link} from "react-router-dom";
import {useActions} from "../../hooks/useActions.jsx";
import {useSelector} from "react-redux";
import Preloader from "../preloader/index.jsx";
import Astronaut404 from "../404page/Astronaut404.jsx";
function DayMeal() {
    const {searchRandomMeal}= useActions();
    const {isLoading, data, error} = useSelector(state => state.meals.detailedData)
    React.useEffect(() => {
        searchRandomMeal()
    },[])

    if(error){
        return <Astronaut404 />
    }
    if(isLoading){
        return <div className={style.loadingContainer}>
            <Preloader />
        </div>
    }
    return (
        <Link to={`meals/${data.idMeal}`} >
        <div className={style.container}>
            <div className={style.content}>
                <h1 className={style.title}>Meal of the Day</h1>
                    <span className={style.name}>
                          {data.strMeal}
                    </span>
                <div className={style.from}>
                    <span>{data.strCategory}</span>
                    <span>|</span>
                    <span>{data.strArea}</span>
                </div>
            </div>
            <div className={style.img}>
                <img src={data.strMealThumb} alt="mael img"/>
            </div>
        </div>
        </Link>
    );
}

export default DayMeal;