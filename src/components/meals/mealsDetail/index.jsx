import React, {useEffect} from 'react';
import style from './index.module.css';
import {useActions} from "../../../hooks/useActions.jsx";

import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import Astronaut404 from "../../404page/Astronaut404.jsx";
import Preloader from "../../preloader/index.jsx";


function MealsDetail() {
    const params  = useParams();
    const {searchMealById} = useActions()

    useEffect(() => {
        searchMealById(params.id);
    },[])
    const {isLoading, data,    error} = useSelector(state => state.meals.detailedData);
    if (error){
        return <Astronaut404 />
    }
    if (isLoading){
        return <div className={style.loaderContainer}><Preloader /></div>
    }
    return (
        <>
            <div className={style.container}>
                <div className={style.recepts}>
                    <div className={(style.texts)}>
                        <h1 className={style.name}>
                            {data.strMeal}
                        </h1>
                        <div className={style.from}>
                            <span>{data.strCategory}</span>
                            <span>|</span>
                            <span>{data.strArea}</span>
                        </div>

                        <div>{data?.ingredients && data?.ingredients .map((it, index) => (
                            <div className={style.recept} key={it.ingredient + index}>
                                <span>{it.ingredient} - </span>
                                <span>{it.measure}</span>
                            </div>
                        ))}</div>
                    </div>
                    <div className={style.img}>
                        <img src={data.strMealThumb} alt=""/>
                    </div>
                </div>
                <h2 className={style.instructionTitle}>Instruction</h2>
                <p className={style.instructionP}>{data.strInstructions}</p>
                <button className={style.btnYoutube}>
                    <Link to={data.strYoutube}>Watch on Youtube</Link>
                </button>
            </div>
        </>
    );
}

export default MealsDetail;