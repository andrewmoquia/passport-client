import { useState, useContext } from 'react'
import { storeContext } from '../../store/CentralStore'
import { googleLogin, twitterLogin, login } from './Login.action'


export default function Loginpage() {

    const { state, dispatch } = useContext(storeContext)

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleGoogleLogin = () => { googleLogin() }

    const handleTwitterLogin = () => { twitterLogin() }

    const handleLocalLogin = () => {
        const loginLocalProps = {
            username: username,
            password: password,
            dispatch: dispatch
        }
        login(loginLocalProps)
    }

    return (
        <div>
            <h1>Login using personal account</h1>
            <h1>Login</h1>
            <input type="text" placeholder='username' onChange={e => setUsername(e.target.value)} />
            <input type="text" placeholder='password' onChange={e => setPassword(e.target.value)} />
            {
                !state.isLoginFetchingData ? (
                    <button onClick={handleLocalLogin}>Login</button>
                ) : (
                    <button onClick={handleLocalLogin} disabled>Login</button>
                )
            }
            <h1>Or login Using</h1>
            <button onClick={handleGoogleLogin}>Log-in with Google</button>
            <button onClick={handleTwitterLogin}>Log-in with Twitter</button>
        </div>
    )
}
