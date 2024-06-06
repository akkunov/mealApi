import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getMaxIngredientNumber, Meal} from "../service/Meal.js";



export const searchMeal = createAsyncThunk(
    "meal/searchMeal",
    async (name,{rejectWithValue}) =>{
        try {
            const response = await Meal.searchMeal(name);
            if(response.status !== 200 || response.data == null){
                throw  new Error('error fetching data');
            }
            return response.data
        }catch (e) {
            return rejectWithValue(e)
        }
    }
)
export const searchMealById = createAsyncThunk(
    "meal/searchMealById",
    async (id,{rejectWithValue}) =>{
        try {
            const response = await Meal.searchMealById(id);
            if(response.status !==200){
                throw  Error('error fetching data')
            }
            return response.data.meals[0]
        }catch (e) {
            return rejectWithValue(e)
        }
    }
)

export const searchRandomMeal = createAsyncThunk(
    "meal/searchRandomMeal",
    async (id,{rejectWithValue}) =>{
        try {
            const response = await Meal.randomMeal();
            if(response.status !==200){
                throw  Error('error fetching data')
            }
            return response.data.meals[0]
        }catch (e) {
            return rejectWithValue(e)
        }
    }
)

const initialState = {
    data: {
        isLoading:false,
        isRetryed: false,
        error: null,
        data:[]
    },
    detailedData: {
        isLoading:false,
        error: null,
        data:{}
    },
    isLoading:false,
    isRetryed: false,
    error: null
}

const mealSlice = createSlice({
    name: "meal",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(searchMeal.pending, (state) =>{
            state.data.isLoading = true
        })
        builder.addCase(searchMeal.fulfilled, (state, action) =>{
            state.data.data = action.payload?.meals || [];
            state.data.isLoading  = false;
            state.data.isRetryed  = true
        })
        builder.addCase(searchMeal.rejected, (state, action) =>{
            state.data.error = action.payload.message;
            state.data.isLoading = false;
            state.data.isRetryed = true
        })
        builder.addCase(searchMealById.pending, (state) =>{
            state.detailedData.isLoading = true
        })
        builder.addCase(searchMealById.fulfilled, (state, action) =>{
            if(!action.payload){
                state.detailedData.isLoading = false;
                state.detailedData.error = 'No Meals'
                return
            }
            const recipeData  = action.payload
            const maxNumber = getMaxIngredientNumber(recipeData);
            const ingredients = [];
            for (let i= 0; i < maxNumber ; i++){
                const ingredient = recipeData[`strIngredient${i}`]
                const measure  = recipeData[`strMeasure${i}`];
                if(ingredient){
                    ingredients.push({ingredient,measure })
                }
            }
            recipeData.ingredients = ingredients
            state.detailedData.data = recipeData;
            state.detailedData.isLoading= false
        })
        builder.addCase(searchMealById.rejected, (state, action) =>{
            state.detailedData.error = action.payload.message
            state.detailedData.isLoading = false;
        })
        builder.addCase(searchRandomMeal.pending, (state) =>{
            state.detailedData.isLoading = true
        })
        builder.addCase(searchRandomMeal.fulfilled, (state, action) =>{
            if(!action.payload){
                state.detailedData.error = 'No Meals';
                state.detailedData.isLoading= false
                return
            }
            state.detailedData.data = action.payload;
            state.detailedData.isLoading= false
        })
        builder.addCase(searchRandomMeal.rejected, (state, action) =>{
            state.detailedData.error = action.payload.message
            state.detailedData.isLoading = false;
        })
    }
})

export default mealSlice.reducer