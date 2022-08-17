import { Component } from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state={
            counter : 0,
        }
    }
    render(){
        return (<div>
        <h3>count value is : {this.state.counter }</h3>
        <button>CLICK</button>
        </div>);
    }
}

export default Counter;