import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import Usestate from './components/Usestate';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Greet name="Angshu" heroname="P">
<p>This is children</p>
        </Greet>
        <Greet name="Nilay" heroname="A">
          <butokal>click me</butokal sokal nesha korechis nki ￼ton>
        </Greet>
        <Greet name="Pratyush" heroname="N" />
        <hr />
        <Welcome name="Angshu" heroname="P"/>
        <Welcome ame="Nilay" heroname="A"/>
        <Welcome name="Pratyush" heroname="N"/> */}
        {/* <Hello /> */}
        {/* <Message /> */}
        {/* <Greet /> */}
        {/* <Counter /> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <EventBind /> */}
        {/* <ParentComponent /> */}
        <Usestate />
      </div>
    )
  }
}

export default App;
