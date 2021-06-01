import axios, { AxiosResponse } from 'axios'
import Cookies from 'js-cookie'

export const googleLogin = () => {
    window.open("https://passport-test-api.herokuapp.com/auth/google", "_self")
}

export const twitterLogin = () => {
    window.open("https://passport-test-api.herokuapp.com/auth/twitter", "_self")
}

export const login = (loginLocalProps: any) => {

    const { username, password, dispatch } = loginLocalProps

    dispatch({
        type: 'LOGIN_DATA_FETCH',
        loginFetchingPayload: true
    })

    console.log('axios-post-triggered')
    axios.post("https://passport-test-api.herokuapp.com/login", {
        username,
        password
    }, {
        withCredentials: true
    }).then((res: AxiosResponse) => {
        if (typeof res.data === 'string') {
            Cookies.set('Session', res.data)
            dispatch({
                type: "AUTH_TOKEN",
                payload: true,
                isFetchingOnStart: true,
                loginFetchingPayload: false
            })
            return window.location.href = '/'
        }
        if (typeof res.data === 'object') {
            dispatch({
                type: 'LOGIN_DATA_FETCH',
                loginFetchingPayload: false
            })
            return console.log(res.data.message)
        }
    })
}