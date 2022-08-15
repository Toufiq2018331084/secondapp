import {Component} from "react";

const name = 'something';

const displayM = () =>{
    return "need from someone";
}

class Message extends Component {
    render(){
        return <h1>returned from Message {this.props.text}</h1>
    }

}

export default Message;