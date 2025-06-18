'use client'
import { createContext } from "react"


export interface IClient{
    fullName: string;
    email: string;
    contactNumber: string;
    sex: string;
    dateOfBirth: Date;
    activeState: boolean;
    trainerId: string;
}

export interface ITrainerStateContext {
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    client?: IClient;
    errorMessage?: string;
}

export interface ITrainerActionContext{
    createClient: (client: IClient) => void;
}
 
export const INITIAL_STATE = {
    isPending: false,
    isSuccess: false,
    isError: false
}

export const TrainerStateContext = createContext<ITrainerStateContext>(INITIAL_STATE);
export const TrainerActionContext = createContext<ITrainerActionContext | undefined>(undefined);