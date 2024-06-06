import axios from "axios";
const baseURL =`https://www.themealdb.com/api/json/v1/1/`
export const $meal = axios.create({
    baseURL
})