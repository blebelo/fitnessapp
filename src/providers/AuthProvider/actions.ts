'use client'
import {createAction} from 'redux-actions';
import { ILogin, ITrainer, IUserStateContext } from './context';

export enum UserActionEnums {
    createTrainerPending = 'CREATE_TRAINER_PENDING',
    createTrainerSuccess = 'CREATE_TRAINER_SUCCESS',
    createTrainerError = 'CREATE_TRAINER_ERROR',

    loginUserPending = 'LOGIN_USER_PENDING',
    loginUserSuccess = 'LOGIN_USER_SUCCESS',
    loginUserError = 'LOGIN_USER_ERROR',
}

// RequestState Objects Declared Once For Reuse 
export const RequestState = {
    Pending: { isPending: true, isSuccess: false, isError: false },
    Success: { isPending: false, isSuccess: true, isError: false },
    Error: { isPending: false, isSuccess: false, isError: true },
};

/*
createAction<PayloadType>(actionType, payloadCreator)
 - PayloadType: The type of data the action will contain
 - actionType: The string identifier for this action
 - payloadCreator: Function that returns the action payload
*/
// createTrainer Action States
export const createTrainerPending = createAction<IUserStateContext>(
    UserActionEnums.createTrainerPending, 
    () => RequestState.Pending
);

export const createTrainerSuccess = createAction<IUserStateContext, ITrainer>(
    UserActionEnums.createTrainerSuccess,
    (trainer: ITrainer) => (
        {...RequestState.Success,
        trainer
    })
);

export const createTrainerError = createAction<IUserStateContext>(
    UserActionEnums.createTrainerError,
    () => RequestState.Error
)

// loginUser Action States
export const loginUserPending = createAction<IUserStateContext>(
    UserActionEnums.loginUserPending, 
    () => RequestState.Pending
);

export const loginUserSuccess = createAction<IUserStateContext, ILogin>(
    UserActionEnums.loginUserSuccess,
    (login: ILogin) => (
        {...RequestState.Success,
        login
    })
);

export const loginUserError = createAction<IUserStateContext>(
    UserActionEnums.loginUserError,
    () => RequestState.Error
)
