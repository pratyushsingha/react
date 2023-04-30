// class compon\ent
// import React, { Component } from 'react'

//  class Usestate extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//           number: 0
//         }
//       }
//       increamentNum = () => {
//         this.setState({
//           number: this.state.number + 1
//         })
//       }
//       render() 
//       {
//     document.title=this.state.number
//     return (
//       <>
//         <button onClick={this.increamentNum}>click {this.state.number}</button>
//       </>
//     )
//   }
// }
// export default Usestate



// function component
import React, { useState } from 'react'

function Usestate() {
  const [number, setNumber] = useState(0)

  return (
    <>
      <button onClick={() => setNumber(number + 1)}>click {number}</button>

    </>
  )
}

export default Usestate
