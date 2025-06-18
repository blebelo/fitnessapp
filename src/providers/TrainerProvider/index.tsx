'use client'
import { useContext, useReducer } from "react"
import { IClient, INITIAL_STATE, TrainerActionContext, TrainerStateContext } from "./context"
import { TrainerReducer } from "./reducer"
import { axiosInstance } from "@/utils/axiosInstance"
import { createClientError, createClientPending, createClientSuccess, getClientsError, getClientsPending, getClientsSuccess } from "./actions"


export const TrainerProvider = ({children}: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(TrainerReducer, INITIAL_STATE);
    const instance = axiosInstance();

    const createClient = async (client: IClient) => {
        dispatch(createClientPending());
        const endpoint = 'client'
        
        await instance.post(endpoint, client)
        .then(
            (response) => {
                dispatch(createClientSuccess(response.data.data));
            }
        ).catch(
            (error) => {
                dispatch(createClientError());
                console.error(error.message);
            }
        ) 
    }

    const getClients = async () => {
        dispatch(getClientsPending());
        const userId = sessionStorage.getItem('id') || '';        
        const endpoint = `/client/trainer/${userId}/clients`;

        await instance.get(endpoint)
        .then(
            (response) => {
                dispatch(getClientsSuccess(response.data.data));
            }
        ).catch((error) => {
                console.error(error.message);
                dispatch(getClientsError());
            });
    };

    return(
        <TrainerStateContext.Provider value={state}>
            <TrainerActionContext.Provider value={{ createClient, getClients }} >
                {children}
            </TrainerActionContext.Provider>
        </TrainerStateContext.Provider>
    )
}

export const useTrainerState = () => {
    const context = useContext(TrainerStateContext);
    if (!context) {
        throw new Error('useTrainerState must be used within a TrainerProvider');
    }
    return context;
}

export const useTrainerActions = () => {
    const context = useContext(TrainerActionContext);
    if (!context) {
        throw new Error('useTrainerActions must be used within a TrainerProvider');
    }
    return context;
}