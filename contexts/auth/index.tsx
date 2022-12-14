import { createContext, useReducer } from 'react';
import { ContextType, DataType, ProviderType } from './types';
import { reducer } from './reducer';

export { useAuthContext } from './hook';

const InitialState: DataType = {
    token: '',
    user: null
}

export const AppContext = createContext<ContextType>({
    state: InitialState,
    dispatch: () => {}
});

export const Provider = ({ children }: ProviderType) =>{
    const [state, dispatch] = useReducer(reducer, InitialState);
    const value = { state, dispatch};
return (
<AppContext.Provider value={value}>
    {children}
</AppContext.Provider>
);
}