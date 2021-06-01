import axios, { AxiosResponse } from 'axios'

const Cookies = require('js-cookie')

const API = "https://passport-test-api.herokuapp.com/user/profile"

export const readCookie = (dispatch: any) => {
        const session = Cookies.get('Session')
        if (session) {
            axios.get(API, {
                withCredentials: true,
                headers: {
                    'auth_token': session.replace(/^"|"$/g, "")
                }
            }).then((res: AxiosResponse) => {
                console.log(res.data)
                if (res.data) {
                    return dispatch({
                        type: 'AUTH_DATA',
                        payload: true,
                        data: res.data,
                        isFetchingOnStart: false
                    })
                }
            }, () => {
                Cookies.remove('Session')
                return window.location.href = '/'
            })
        }
        if (!session) {
            return dispatch({
                type: 'FETCHING_ON_START',
                isFetchingOnStart: false
            })
        }
}
