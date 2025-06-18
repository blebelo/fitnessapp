'use client'
import {createAction} from 'redux-actions';
import { IClient, ITrainerStateContext } from './context';

export enum TrainerActionEnums {
    createClientPending = 'CREATE_CLIENT_PENDING',
    createClientSuccess = 'CREATE_CLIENT_SUCCESS',
    createClientError = 'CREATE_CLIENT_ERROR',
}

// RequestState Objects Declared Once For Reuse 
export const RequestState = {
    Pending: { isPending: true, isSuccess: false, isError: false },
    Success: { isPending: false, isSuccess: true, isError: false },
    Error: { isPending: false, isSuccess: false, isError: true },
};

// createClient Action States
export const createClientPending = createAction<ITrainerStateContext>(
    TrainerActionEnums.createClientPending, 
    () => RequestState.Pending
);

export const createClientSuccess = createAction<ITrainerStateContext, IClient>(
    TrainerActionEnums.createClientSuccess,
    (client: IClient) => (
        {...RequestState.Success,
        client
    })
);

export const createClientError = createAction<ITrainerStateContext>(
    TrainerActionEnums.createClientError,
    () => RequestState.Error
)