import React from 'react'

import {database} from "../firebase";
import {mapObjectToArray} from "../utils";

import moment from 'moment'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'


class Chat extends React.Component {

    state = {
        name: 'Artur',
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
        user: this.state.name,
        timestamp: Date.now()
    }).then(()=>this.setState({newMessage: ''}))


    render() {
        return (
            <div>
                <TextField
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
                            this.state.messages.map(
                                text => (
                                    <MenuItem key={text.key}>
                                        <span>[{moment(text.timestamp).format('MMMM Do YYYY, h:mm:ss a')}]  </span>
                                    <b>{text.user}:</b>
                                    {text.message}
                                    </MenuItem>
                                )
                            )
                    }
                </div>

            </div>

        )
    }
}

export default Chat