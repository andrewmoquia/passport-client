import './Navbar.scss'
import { useContext } from 'react'
import { storeContext } from '../store/CentralStore'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'


export default function Navbar() {

    const { state, dispatch } = useContext(storeContext)

    const logout = () => {
        axios.get("https://passport-test-api.herokuapp.com/auth/logout", {
            withCredentials: true
        }).then(() => {
            Cookies.remove('Session')
            dispatch({
                type: 'AUTH_TOKEN',
                payload: false,
            })
            return window.location.href = '/'
        })
    }

    return (
        <div className="navbar-container">
            {
                state.isFetchingOnStart ? (
                    <div className= 'main-loading-screen'>
                        <h1>Loading!!!</h1>
                    </div>
                ) : !state.isFetchingOnStart && state.isAuthenticated ? (
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li onClick={logout}>Logout</li>
                        </ul>
                ) : (
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                            <li><Link to='/register'>Register</Link></li>
                        </ul>
                )
            }
        </div>
    )
}
