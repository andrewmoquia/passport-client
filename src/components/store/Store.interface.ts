export interface IState {
    token?: any,
    userData?: any,
    isLoggedIn?: boolean
}

export interface IAction {
    type: string,
    payload: any
    isLoggedIn: boolean,
}