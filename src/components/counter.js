import { Component } from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state={
            counter : 0,
        }
      //  this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    // increment = ()=>{
    //     this.setState({
    //         counter: this.state.counter+1,
    //     })
    // }

    increment(){
        this.setState({
            counter: this.state.counter+1,
        })
    }
    decrement(){
        if(this.state.counter>0){
            this.setState({
                counter: this.state.counter-1,
            })
        
        }
    }

    render(){
        return (<div>
        <h3>count value is : {this.state.counter }</h3>
        <button onClick={()=> this.increment()}>INCREMENT</button>
        <button onClick={this.decrement}>DECREMENT</button>
        </div>);
    }
}

export default Counter;