import {configureStore} from "@reduxjs/toolkit";
import mealReducer from './mealSlice.js'
const store = configureStore({
    reducer: {
        meals :mealReducer
    },
})

export default  store