import React from 'react'

import {auth} from "../../firebase";

import AppBar from 'material-ui/AppBar'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import IconButton from 'material-ui/IconButton'

const ChatAppBar = () => (
    <AppBar
        showMenuIconButton={false}
        iconElementRight={
            <IconButton onClick={() => auth.signOut()}>
                <NavigationClose/>

            </IconButton>}

    />
)

export default ChatAppBar