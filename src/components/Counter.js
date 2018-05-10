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

    saveToDb = (data) => (
        database.ref('/counter')
            .set(data)
    )


    render () {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={()=>this.saveToDb(this.state.counter - 1)}>-</button>
                <button onClick={()=>this.saveToDb(this.state.counter + 1)}>+</button>
            </div>
        )
    }
}

export default Counter