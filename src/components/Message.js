import React, { Component } from 'react'

class Message extends Component {
constructor(){
    super()
    this.state = {
        message:'welcome Vistor'
    }
}

changeMessage(){
    this.setState({
        message:'Thnx for subscribing'
    })
}
    render() {
        return (
            <>
                <h1>{this.state.message}</h1>
                <button onClick ={() => this.changeMessage()}>Subscribe</button>
            </>
        )
    }
}

export default Message
