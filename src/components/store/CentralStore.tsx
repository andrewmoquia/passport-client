import { useReducer, createContext } from 'react'
// import { IAction, IState } from './Store.interface'
import { authReducer, loginReducer, registerReducer} from './Store.reducers'

const initialState: any = {
    isAuthenticated: false,
    isFetchingOnStart: true,
    isLoginFetchingData: false,
    isRegisterFetching: false,
    isRegisterFailed: false,
    registerErrMsg: '',
    userData: {}
}

export const storeContext = createContext<any>(initialState)

const combineReducers = (...reducers: Function[]) =>
    (state: any = initialState, action: any): any => {
        for (let i = 0; i < reducers.length; i++)
            state = reducers[i](state, action)
        return state;
    }
    
const combinedReducer = combineReducers(authReducer, loginReducer, registerReducer)

export function StoreProvider(props: JSX.ElementChildrenAttribute): JSX.Element {
    const [state, dispatch] = useReducer(combinedReducer, initialState)
    return (
        <storeContext.Provider value={{ state, dispatch }}>
            {props.children}
        </storeContext.Provider>
    )
}