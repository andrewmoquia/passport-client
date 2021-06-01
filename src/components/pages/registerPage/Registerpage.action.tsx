import axios, { AxiosResponse } from 'axios'

export const register = (props: any) => {

    const {dispatch, username, password} = props

    dispatch({
        type: 'REGISTER_FETCH_STATUS',
        isRegisterFetching: true,
        isRegisterFailed: false,
    })

    axios.post("https://passport-test-api.herokuapp.com/register", {
        username,
        password
    }, {
        withCredentials: true
    }).then((res: AxiosResponse) => {
        if (res.data === "Success account creation!") {
            dispatch({
                type: 'REGISTER_FETCH_STATUS',
                isRegisterFetching: false,
                isRegisterFailed: false
            })
            return window.location.href = "/login"
        }
        return dispatch({
            type: 'REGISTER_ERR_STATUS',
            isRegisterFetching: false,
            isRegisterFailed: true,
            registerErrMsg: res.data
        })
    })
}