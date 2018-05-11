import React from 'react'
import PaperRefined from "../PaperRefined";

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const CreateUserByEmailAndPassword = (props) => (
    <div>
        <PaperRefined centered={true}>
            <h4>Register new user</h4>
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

            <TextField
                name={'retype-password'}
                type={'password'}
                placeholder={'Retype your password'}
                value={props.retypePasswordValue}
                onChange={props.onRetypePasswordChange}
                fullWidth={true}
            />

            <RaisedButton
                label={'Register'}
                onClick={props.onRegisterClick}
            />
        </PaperRefined>
    </div>
)

export default CreateUserByEmailAndPassword