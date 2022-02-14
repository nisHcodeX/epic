import React,{useState, useEffect} from 'react'
import { connect } from 'react-redux';
import { useNavigate} from 'react-router-dom'

import '../App.css'
import {attemptLogin} from './auth.actions'

const mapStateToProps = (state, ownProps) => ({
    ...state,
});
const mapDispatchToProps = {
    attemptLogin: payload => attemptLogin(payload)
}
const connectToStore = connect(
    mapStateToProps,
    mapDispatchToProps
)


const Login = ({ attemptLogin, authReducer }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const { loginState } = authReducer;

    useEffect(() => {
        if (loginState === 1) {
            history('/dashboard');
        }
    }, [loginState])

    const loginAttempt = (e) => {

        attemptLogin({
            username: username,
            password: password,
        });
        e.preventDefault();
        setUsername('')
        setPassword('')
    }


    return (
        <div className="App">
            <form className="form" onSubmit={loginAttempt}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input type={"submit"} value={"Log In"} />
            </form>
        </div>
    )
}

export default connectToStore(Login);
