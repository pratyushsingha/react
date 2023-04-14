import React, { Component } from 'react'
// function Greet() {
//     return <h1>Hello pratyush</h1>
// }

// arrow function
// const Greet = props => {
//     // console.log(props)
//     return (
//         <>
//             {/* <h1>Hello {props.name} a.k.a {props.heroname} {props.children}
//             </h1> */}
//         </>
//     )
// }

class Greet extends Component {
    constructor() {
        super()
        this.state = {
            message: "hiiii pratyush"
        }
    }
    changeMessage(){
        this.setState({
            message:'Thara vai banega developer'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>How are u</button>
            </div>
        )
    }

}


export default Greet