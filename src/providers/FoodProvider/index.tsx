'use client'
import React, { useContext, useReducer } from "react"
import { FoodReducer } from "./reducer"
import { FoodActionContext, FoodStateContext, IFood, IMealPlan, INITIAL_STATE } from "./context"
import { axiosInstance } from "@/utils/axiosInstance"
import { createFoodError, createFoodPending, createFoodSuccess, createMealPlanError, createMealPlanPending, createMealPlanSuccess, getFoodItemsError, getFoodItemsPending, getFoodItemsSuccess } from "./actions"

export const FoodProvider = ({children}: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(FoodReducer, INITIAL_STATE);
    const instance = axiosInstance();
    
    const createFood = async (foodItem: IFood) => {
        dispatch(createFoodPending());
        
        await instance.post('food', foodItem)
        .then(
            (response) => {
                dispatch(createFoodSuccess(response.data.data))
            }
        ).catch(
            () =>{
                dispatch(createFoodError())
            }
        )
    } 

    const getFoodItems = async () => {
        dispatch(getFoodItemsPending());
        
        await instance.get('food')
        .then(
            (response) => {
                dispatch(getFoodItemsSuccess(response.data.data));
            }
        ).catch(
            () => {
                dispatch(getFoodItemsError());
    });
};

    const createMealPlan = async (mealPlan: IMealPlan) => {
        dispatch(createMealPlanPending());

        await instance.post('mealplan', mealPlan)
        .then(
            (response) => {
                dispatch(createMealPlanSuccess(response.data))
            }
        ).catch(
            () => {
                dispatch(createMealPlanError())
            }
        )
    }

    return (
        <FoodStateContext.Provider value={state}>
            <FoodActionContext value={{createFood, createMealPlan, getFoodItems}}>
                {children}
            </FoodActionContext>
        </FoodStateContext.Provider>
    )
}

export const useFoodState = () => {
    const context  = useContext(FoodStateContext);
    if (!context) {
        throw new Error('useFoodState must be used within a FoodProvider');
    }
    return context;
}

export const useFoodActions = () => {
    const context = useContext(FoodActionContext);
    if (!context) {
        throw new Error('useFoodActions must be used within a FoodProvider');
    }
    return context;
} 
