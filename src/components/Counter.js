import React, {Component} from 'react'

import {database} from "../firebase";

class Counter extends Component {

    state = {
        counter: 0
    }


    componentDidMount() {
        database.ref('/counter')
            .on(
                'value',
                (snapshot) => {
                    this.setState({counter: snapshot.val()})
                }
            )
    }

    render () {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={()=>{}}>-</button>
                <button onClick={()=>{}}>+</button>
            </div>
        )
    }
}

export default Counter