'use client'
import { createContext } from "react"

export interface IFood{
    id?: string
    name: string
    protein: number
    carbs: number
    sugar: number
    fat: number
    fiber: number
    sodium: number
    potassium: number
    category: string
    servingSize: number
    cholesterol: number
    energy: number
}
 
export interface ITotals {
    calories: number;
    carbs: number;
    protein: number;
    fat: number
}

export interface IMeal {
    _id?: string;
    name: string;
    note?: string;
    items: {
        _id: string;
        name: string;
        quantity: number;
        unit: string;
        itemTotals: ITotals;
        }[];
    clientNotes: [];
}

export interface IMealPlan {
    mealTotals: ITotals;
    _id: string;
    name: string;
    client: string;
    trainer: string;
    clientName: string;
    description: string;
    notes: string;
    meals: IMeal[];
}

export interface IFoodStateContext{
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    foodItem?: IFood;
    meal?: IMeal;
    mealPlan?: IMealPlan;
}

export interface IFoodActionContext{
    createFood: (foodItem: IFood) => void;
    createMealPlan: (mealPlan: IMealPlan) => void;
}

export const INITIAL_STATE = {
    isPending: false,
    isSuccess: false,
    isError: false
}

export const FoodStateContext = createContext<IFoodStateContext>(INITIAL_STATE);
export const FoodActionContext = createContext<IFoodActionContext>(undefined!);