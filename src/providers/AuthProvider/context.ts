'use client'
import { createContext } from "react";


export interface ILogin{
    email: string
    password: string;
}

export interface ITrainer extends ILogin {
    name: string;
    confirmPassword ?: string;
    contactNumber: string;
    planType: string;
    activeState: boolean;
    trial: boolean;
    policiesAccepted: boolean;
    role: string;   
}

export interface IClient extends ILogin {
    name: string;
    dateOfBirth: string;
    confirmPassword: string;
    contactNumber: string;
    policiesAccepted: boolean;
    role: string;   
}

export interface IUserStateContext {
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    trainer?: ITrainer;
    login?: ILogin;
    client?: IClient;
}

export interface IUserActionContext {
    createTrainer: (trainer: ITrainer) => void;
    login: (login: ILogin) => void;
    registerUser: (client: IClient) => void; 
}

export const INITIAL_STATE = {
    isPending: false,
    isSuccess: false,
    isError: false
}


export const UserStateContext = createContext<IUserStateContext>(INITIAL_STATE);
export const UserActionContext = createContext<IUserActionContext | undefined>(undefined);