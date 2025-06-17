'use client'
import { handleActions } from "redux-actions";
import { INITIAL_STATE, IUserStateContext } from "./context";
import { UserActionEnums } from "./actions"; 

export const UserReducer = handleActions<IUserStateContext, IUserStateContext>({

    // createUser
    [UserActionEnums.createTrainerPending]:(state, action) =>(
        {...state, ...action.payload}),
    
    [UserActionEnums.createTrainerSuccess]:(state, action) =>(
        {...state, ...action.payload}),
    
    [UserActionEnums.createTrainerError]:(state, action) =>(
        {...state, ...action.payload}),

    // loginUser
    [UserActionEnums.loginUserPending]:(state, action) =>(
        {...state, ...action.payload}),

    [UserActionEnums.loginUserSuccess]:(state, action) =>(
        {...state, ...action.payload}),

    [UserActionEnums.loginUserError]:(state, action) =>(
        {...state, ...action.payload}),
    
    // registerUser
    [UserActionEnums.registerUserPending]:(state, action) =>(
        {...state, ...action.payload}),

    [UserActionEnums.registerUserSuccess]:(state, action) =>(
        {...state, ...action.payload}),

    [UserActionEnums.registerUserError]:(state, action) =>(
        {...state, ...action.payload}),
    },INITIAL_STATE)