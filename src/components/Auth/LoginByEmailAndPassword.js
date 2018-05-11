import React from 'react'
import PaperRefined from "../PaperRefined";

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const LogInByEmailAndPassword = (props) => (
    <div>
        <PaperRefined centered={true}>
            <TextField
                name={'email'}
                type={'email'}
                placeholder={'Type your email'}
                value={props.emialValue}
                onChange={props.onEmailChange}
                fullWidth={true}
            />
            <TextField
                name={'password'}
                type={'password'}
                placeholder={'Type your password'}
                value={props.passwordValue}
                onChange={props.onPasswordChange}
                fullWidth={true}
            />

            <RaisedButton
                label={'Login'}
                onClick={props.onLogInClick}
            />
        </PaperRefined>
    </div>
)

export default LogInByEmailAndPassword