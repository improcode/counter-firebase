import React from 'react'

import {auth, database} from "../../firebase";
import {mapObjectToArray} from "../../utils";


import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


import ChatAppBar from "./ChatAppBar";
import Message from "./Message";


class Chat extends React.Component {

    state = {
        newMessage: '',
        messages: null
    }


    componentDidMount() {
        database.ref('/chat').on('value', (snapshot) => (
            this.setState({
                messages: mapObjectToArray(snapshot.val()).reverse()
            })
        ))
    }

    onNewMessageChangeHandler = (e, value) => this.setState({newMessage: value})

    addMessage = () => database.ref('/chat').push({
        message: this.state.newMessage,
        user: auth.currentUser.displayName,
        email: auth.currentUser.email,
        avatar: auth.currentUser.photoURL,
        timestamp: Date.now()
    }).then(() => this.setState({newMessage: ''}))


    render() {
        return (
            <div>
                <ChatAppBar/>
                < TextField
                    name={'new-message'}
                    fullWidth={true}
                    value={this.state.newMessage}
                    onChange={this.onNewMessageChangeHandler}

                />
                <RaisedButton
                    onClick={this.addMessage}
                    label={'Send'}
                    primary={true}
                    fullWidth={true}

                />
                <div>

                    {
                        !this.state.messages ?
                            'Ładowanie..'
                            :
                            this.state.messages.map(text => (
                                    <Message
                                        key={text.key}
                                        text={text}
                                    />

                                )
                            )
                    }
                </div>

            </div>

        )
    }
}

export default Chat