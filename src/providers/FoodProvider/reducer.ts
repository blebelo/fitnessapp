'use client'
import { handleActions } from "redux-actions";
import { IFoodStateContext, INITIAL_STATE } from "./context";
import { FoodActionEnums } from "./actions";

export const FoodReducer = handleActions<IFoodStateContext, IFoodStateContext>({

    // createFood 
    [FoodActionEnums.createFoodPending]: (state, action) =>(
        {...state, ...action.payload}),
    
    [FoodActionEnums.createFoodSuccess]: (state, action) =>(
        {...state, ...action.payload}),

    [FoodActionEnums.createFoodError]: (state, action) =>(
        {...state, ...action.payload}),
    
    //createMealPlan
    [FoodActionEnums.createMealPlanPending]: (state, action) =>(
        {...state, ...action.payload}),

    [FoodActionEnums.createMealPlanSuccess]: (state, action) =>(
        {...state, ...action.payload}),

    [FoodActionEnums.createMealPlanError]: (state, action) =>(
        {...state, ...action.payload}),

    // getFoodItems
    [FoodActionEnums.getFoodItemsPending]: (state, action) =>(
        {...state, ...action.payload}),

    [FoodActionEnums.getFoodItemsSuccess]: (state, action) =>(
        {...state, ...action.payload}),

    [FoodActionEnums.getFoodItemsError]: (state, action) =>(
        {...state, ...action.payload})    
    }, INITIAL_STATE)