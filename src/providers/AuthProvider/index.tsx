'use client'
import React, { useContext, useReducer } from "react";
import { UserReducer } from "./reducer";
import { INITIAL_STATE, ITrainer, UserStateContext, UserActionContext, ILogin, IClient } from "./context";
import { createTrainerError, createTrainerPending, createTrainerSuccess, loginUserError, loginUserPending, loginUserSuccess, registerUserError, registerUserPending, registerUserSuccess } from "./actions";
import { axiosInstance } from "@/utils/axiosInstance";
import { useRouter } from "next/navigation";


export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE)
    const instance = axiosInstance();
    const router = useRouter();

    const createTrainer = async (trainer: ITrainer) => {
        dispatch(createTrainerPending());
         const endpoint = 'users/register';
        
        await instance.post(endpoint, trainer)
        .then(
            (response) => {
                dispatch(createTrainerSuccess(response.data));
            }
        ).catch(
            () => {
                dispatch(createTrainerError());
            })
    };

    const login = async (user: ILogin) => {
        dispatch(loginUserPending());
         const endpoint = 'users/login';
        
        await instance.post(endpoint, user)
        .then(
            (response) => {
                dispatch(loginUserSuccess(response.data));
                const jwToken = response.data.data.token
                sessionStorage.setItem('token', jwToken);
                sessionStorage.setItem('role', jwToken.role)
                sessionStorage.setItem('id', jwToken.id)
                sessionStorage.setItem('name', jwToken.name)
                router.push(jwToken.role === 'admin'
                    ? '/trainer/dashboard'
                    : '/client/dashboard')
            }
        ).catch(
            () => {
                dispatch(loginUserError());
            })
    };

    const registerUser = async (user: IClient) => {
        dispatch(registerUserPending());
         const endpoint = 'users/register/mobile';
        
        await instance.post(endpoint, user)
        .then(
            (response) => {
                dispatch(registerUserSuccess(response.data));
            }
        ).catch(
            () => {
                dispatch(registerUserError());
            })
    };

    return (
        <UserStateContext.Provider value={state}>
            <UserActionContext.Provider value={{ createTrainer, login, registerUser }}>
                {children}
            </UserActionContext.Provider>
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