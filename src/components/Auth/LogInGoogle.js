import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import PaperRefined from "../PaperRefined";


const LogInByGoogle = (props) => (
    <div>
        <PaperRefined>
            <RaisedButton
                secondary={true}
                label={'Log In By Google'}
                onClick={props.onLogInClick}


            />
        </PaperRefined>
    </div>
)

export default LogInByGoogle