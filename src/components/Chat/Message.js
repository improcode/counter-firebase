import React from 'react'
import moment from 'moment'
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';
import { darkBlack } from 'material-ui/styles/colors'
import ChatIcon from 'material-ui/svg-icons/communication/chat'

const Message = ({ text }) => (
    <div>
        <ListItem
            onClick={()=> alert(text.message)}
            leftAvatar={
                <Avatar
                    src={text.avatar}
                    icon={<ChatIcon />}
                />
            }
            primaryText={text.user || text.email}
            secondaryText={
                <p>
                    <span style={{ color: darkBlack }}>
                        {moment(text.timestamp).format('DD/MM/YY HH:mm')}
                    </span> --
                    {text.message}
                </p>
            }
            secondaryTextLines={2}
        />
    </div>
)

export default Message