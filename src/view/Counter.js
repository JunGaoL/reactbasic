import React, { Component } from 'react'
import store from '../Store.js'
import * as Actions from '../action'
const buttonStyle = {
    margin: '10px'
}
class Counter extends Component{
    constructor(props){
        super(props);

        this.onIncrement = this.onIncrement.bind(this)
        this.onDecrement = this.onDecrement.bind(this)
        this.onchange = this.onchange.bind(this)
        this.getOwnState = this.getOwnState.bind(this)
        this.state = this.getOwnState()
        console.log('counter constructor '+this.props.caption)
    }

    getOwnState(){
        console.log('counter getownstate '+this.props.caption)
        return {
            value: store.getState()[this.props.caption]
        }
    }

    onchange(){
        this.setState(this.getOwnState())
    }

    onIncrement(){
        store.dispatch(Actions.increment(this.props.caption))
    }

    onDecrement(){
        store.dispatch(Actions.decrement(this.props.caption))
    }
    componentDidMount(){
        store.subscribe(this.onchange)
    }
    render(){
        const value = this.state.value;
        const {caption} = this.props
        console.log('counter render '+this.props.caption)        
        return(
            <div>
                <button style={buttonStyle} onClick={this.onIncrement}>+</button>
                <button style={buttonStyle} onClick={this.onDecrement}>-</button>
                {caption} count: {value}
            </div>
        )
    }
}

export default Counter