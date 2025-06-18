'use client'
import {createAction} from 'redux-actions';
import { IFood, IFoodStateContext, IMealPlan } from './context';


export enum FoodActionEnums {
    createFoodPending = 'CREATE_FOOD_PENDING',
    createFoodSuccess = 'CREATE_FOOD_SUCCESS',
    createFoodError = 'CREATE_FOOD_ERROR',

    createMealPending = 'CREATE_MEAL_PENDING',
    createMealSuccess = 'CREATE_MEAL_SUCCESS',
    createMealError = 'CREATE_MEAL_ERROR',

    createMealPlanPending = 'CREATE_MEAL_PLAN_PENDING',
    createMealPlanSuccess = 'CREATE_MEAL_PLAN_SUCCESS',
    createMealPlanError = 'CREATE_MEAL_PLAN_ERROR'
}

// RequestState Objects Declared Once For Reuse 
export const RequestState = {
    Pending: { isPending: true, isSuccess: false, isError: false },
    Success: { isPending: false, isSuccess: true, isError: false },
    Error: { isPending: false, isSuccess: false, isError: true },
};

// createFood Action States
export const createFoodPending = createAction<IFoodStateContext>(
  FoodActionEnums.createFoodPending,
  () => RequestState.Pending
);

export const createFoodSuccess = createAction<IFoodStateContext, IFood>(
  FoodActionEnums.createFoodSuccess,
  (food: IFood) => ({
    ...RequestState.Success,
    food
  })
);

export const createFoodError = createAction<IFoodStateContext>(
  FoodActionEnums.createFoodError,
  () => RequestState.Error
);


// createMealPlan Action States
export const createMealPlanPending = createAction<IFoodStateContext>(
  FoodActionEnums.createMealPlanPending,
  () => RequestState.Pending
);

export const createMealPlanSuccess = createAction<IFoodStateContext, IMealPlan>(
  FoodActionEnums.createMealPlanSuccess,
  (mealPlan: IMealPlan) => ({
    ...RequestState.Success,
    mealPlan
  })
);

export const createMealPlanError = createAction<IFoodStateContext>(
  FoodActionEnums.createMealPlanError,
  () => RequestState.Error
);