import {$meal} from "../http/axios.js";

export class Meal{
    static async searchMeal(meal){
        return $meal(`search.php?s=${meal}`)
    }
    static async randomMeal(){
        return $meal(`random.php`)
    }
    static async searchMealById(id){
        return $meal(`lookup.php?i=${id}`)
    }

}

export function getMaxIngredientNumber(recipe) {
    if(!recipe) return
    let maxNumber = 0;
    for (let key in recipe) {
        if (key.startsWith('strIngredient')) {
            const number = parseInt(key.replace('strIngredient', ''));
            if (!isNaN(number) && number > maxNumber) {
                maxNumber = number;
            }
        }
    }
    return maxNumber;
}

