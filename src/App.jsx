import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {Login, Register} from './components/login/index';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggingActive: true,
    }
  }

  render() {
    const {isLoggingActive} = this.state;
    const current = isLoggingActive ? "Register" : "Login";
    const currentActive = isLoggingActive ? "Login" : "Register";
    return (
      <div className = 'App'>
        <div className="login">
          <div className="container">
            {isLoggingActive && <Login container={(ref) => this.current = ref}/>}
            {!isLoggingActive && <Register container={(ref) => this.current = ref}/>}
          </div>

          <RightSide current={current} containerRef={ref => this.rightSide = ref} onClick ={this.changeState.bind(this)}/>

        </div>
      </div>
    )
  }

}

const RightSide = props => {
  return <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
    <div className="inner-container">
      <div className="text">{props.current}</div>
    </div>
  </div>
}

export default App;
