import React from 'react'
import {auth, googleProvider} from "../../firebase";
import LogInByGoogle from './LogInGoogle'
import LoginByEmailAndPassword from './LoginByEmailAndPassword'

class LogInForms extends React.Component {
    state = {
        logInEmail: '',
        logInPassword: ''
    }


    logInByGoogle = () => auth.signInWithPopup(googleProvider)
        .catch(e => alert('Something went wrong!'))

    logInByEmailAndPassword = () => auth.signInWithEmailAndPassword(
        this.state.logInEmail,
        this.state.logInPassword
    ).catch(e => alert('Something went wrong!'))

    onLogInEmailChange = (e, value) => this.setState({logInEmail: value})
    onLogInPasswordChange = (e, value) => this.setState({logInPassword: value})

    render() {
        return (
            <div>
                <LoginByEmailAndPassword
                    emailValue={this.state.logInEmail}
                    onEmailChange={this.onLogInEmailChange}
                    passwordValue={this.state.logInPassword}
                    onPasswordChange={this.onLogInPasswordChange}
                    onLogInClick={this.logInByEmailAndPassword}

                />
                <LogInByGoogle
                    onLogInClick={this.logInByGoogle}
                />

            </div>
        )


    }
}

export default LogInForms