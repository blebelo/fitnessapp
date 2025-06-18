'use client'
import { handleActions } from "redux-actions";
import { INITIAL_STATE, ITrainerStateContext } from "./context";
import { TrainerActionEnums } from "./actions"; 

export const TrainerReducer = handleActions<ITrainerStateContext, ITrainerStateContext>({

    // createClient
    [TrainerActionEnums.createClientPending]:(state, action) =>(
        {...state, ...action.payload}),
    
    [TrainerActionEnums.createClientSuccess]:(state, action) =>(
        {...state, ...action.payload}),
    
    [TrainerActionEnums.createClientError]:(state, action) =>(
        {...state, ...action.payload})
        
    },INITIAL_STATE)