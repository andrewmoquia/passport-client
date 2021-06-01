import { useParams } from 'react-router-dom'
import { useEffect, useCallback } from 'react'
import Cookies from 'js-cookie'


export default function Homepage() {

    const { id } = useParams<any>()

    const setCookie = useCallback(() => {
        if (id) {
            Cookies.set('Session', id)
        }
    }, [id])

    useEffect(() => {
        console.log("trigger")
        setCookie()
    }, [setCookie])


    return (
        <div>
            <h1>Welcome!</h1>
        </div>
    )
}
