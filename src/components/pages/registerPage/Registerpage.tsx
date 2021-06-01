import { useState, useContext } from 'react'
import { storeContext } from '../../store/CentralStore'
import { register } from './Registerpage.action'

export default function Registerpage() {

    const { state, dispatch } = useContext(storeContext)

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const registerProps = {
        username: username,
        password: password,
        dispatch: dispatch
    }

    const handleRegisterAction = () => {
        register(registerProps)
    }

    return (
        <div>
            <h1>Register</h1>
            {
                state.isRegisterFailed ? (
                    <h1>{state.registerErrMsg}</h1>
                ) : null
            }
            <input type="text" placeholder='username' onChange={e => setUsername(e.target.value)} />
            <input type="text" placeholder='password' onChange={e => setPassword(e.target.value)} />
            {
                !state.isRegisterFetching ? (
                    <button onClick={handleRegisterAction}>Create Account</button>
                ) : (
                    <button disabled>Create Account</button>
                )
            }

        </div>
    )
}
