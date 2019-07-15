import React, {Component} from 'react'
import store from '../Store'
class Summary extends Component{
    constructor(props){
        super(props)
        this.state=this.getOwnstate()
        this.onchange = this.onchange.bind(this)
    }

    getOwnstate(){
        const state = store.getState()
        console.log('Summary '+state)
        let sum = 0
        for(const key in state){
            if(state.hasOwnProperty(key)){
                sum += state[key]
            }
        }
        return {sum: sum}
    }

    onchange(){
        this.setState(this.getOwnstate())
    }
    componentDidMount(){
        store.subscribe(this.onchange)
    }

    render(){
        const sum = this.state.sum
        return(
            <div>total count: {sum}</div>
        )
    }
}

export default Summary