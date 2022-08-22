import { Component } from "react";

class ClassEvent extends Component{

    handleClick(){
        console.log("lklkjlkjfdsfsd");
    }

    render(){
        return<div>
            this is a class based component
            <button onClick={this.handleClick}>click class</button>
        </div>
    }
}

export default ClassEvent;