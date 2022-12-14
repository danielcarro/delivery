import { DataType, ActionType, Actions } from './types';

export const reducer = (state: DataType, action: ActionType) => {
    switch (action.type) {
        case Actions.SET_TENAT:
            return { ...state, tenant: action.payload.tenant };
            break;
            default: return state;
    }
}