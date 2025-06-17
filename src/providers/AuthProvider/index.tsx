'use client'
import React, { useContext, useReducer } from "react";
import { UserReducer } from "./reducer";
import { INITIAL_STATE, ITrainer, UserStateContext, UserActionContext, ILogin, IClient } from "./context";
import { createTrainerError, createTrainerPending, createTrainerSuccess, loginUserError, loginUserPending, loginUserSuccess, registerUserError, registerUserPending, registerUserSuccess } from "./actions";
import { axiosInstance } from "@/utils/axiosInstance";
import { jwtDecode } from "jwt-decode";


export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE)
    const instance = axiosInstance();

    const createTrainer = async (trainer: ITrainer) => {
        dispatch(createTrainerPending());
         const endpoint = 'users/register';
        
        await instance.post(endpoint, trainer)
        .then(
            (response) => {
                createTrainerSuccess(response.data);
                console.log("Trainer sign up successful");
            }
        ).catch(
            () => {
                createTrainerError();
            })
    };

    const login = async (user: ILogin) => {
        dispatch(loginUserPending());
         const endpoint = 'users/login';
        
        await instance.post(endpoint, user)
        .then(
            (response) => {
                loginUserSuccess(response.data);
                const jwToken = response.data.data.token
                const [authType, token] = jwToken.split(' ')
                console.log("Login Succesful");
                localStorage.setItem('currentUserDeets', JSON.stringify(jwtDecode(jwToken)));
                console.log(authType)
                console.log(token)
            }
        ).catch(
            () => {
                loginUserError();
            })
    };

    const registerUser = async (user: IClient) => {
        dispatch(registerUserPending());
         const endpoint = 'users/register/mobile';
        
        await instance.post(endpoint, user)
        .then(
            (response) => {
                registerUserSuccess(response.data);
                console.log("CLient sign up successful");
            }
        ).catch(
            (error) => {
                registerUserError();
                console.log(error)
            })
    };


    return (
        <UserStateContext.Provider value={state}>
            <UserActionContext value={{createTrainer, login, registerUser}}>
                {children}
            </UserActionContext>
        </UserStateContext.Provider>
    )
}


export const useUserState = () => {
    const context = useContext(UserStateContext);
    if (!context) {
        throw new Error('useUserState must be used within a AuthProvider');
    }
    return context;
}

export const useUserActions = () => {
    const context = useContext(UserActionContext);
    if (!context) {
        throw new Error('useUserActions must be used within a ProductProvider');
    }
    return context;
}