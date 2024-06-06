import React from 'react';
import DayMeal from "../components/dayMeal/dayMeal.jsx";
import Search from "../components/search/search.jsx";
import Meals from "../components/meals/meals.jsx";

function Main() {
    return (
        <>
            <section>
                <DayMeal />
            </section>
            <section>
                <Search />
            </section>
            <section>
                <Meals />
            </section>
        </>

    );
}

export default Main;