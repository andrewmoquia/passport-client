
export function authReducer(state: any, action: any) {
    switch (action.type) {
        case 'AUTH_TOKEN':
            return {
                ...state,
                isAuthenticated: action.payload,
                isFetchingOnStart: action.isFetchingOnStart,
                isLoginFetchingData: action.loginFetchingPayload
            }
        case 'AUTH_DATA':
            return {
                ...state,
                userData: action.data,
                isAuthenticated: action.payload,
                isFetchingOnStart: action.isFetchingOnStart,
            }
        case 'FETCHING_ON_START':
            return {
                ...state,
                isFetchingOnStart: action.isFetchingOnStart
            }
        default:
            return state
    }
}

export function loginReducer(state: any, action: any) {
    switch (action.type) {
        case 'REGISTER_FETCH_STATUS':
            return {
                ...state,
                isRegisterFetching: action.isRegisterFetching,
                isRegisterFailed: action.isRegisterFailed
            }
        case 'REGISTER_ERR_STATUS':
            return {
                ...state,
                isRegisterFetching: action.isRegisterFetching,
                registerErrMsg: action.registerErrMsg,
                isRegisterFailed: action.isRegisterFailed
            }
        default:
            return state
    }
}

export function registerReducer(state: any, action: any) {
    switch (action.type) {
        case 'LOGIN_DATA_FETCH':
            return { ...state, isLoginFetchingData: action.loginFetchingPayload }
        default:
            return state
    }
}