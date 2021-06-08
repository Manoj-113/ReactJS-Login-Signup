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
    return (
      <div className = 'App'>
        <div className="login">
          <div className="container">
            {isLoggingActive && <Login container={(ref) => this.current = ref}/>}
            {!isLoggingActive && <Register container={(ref) => this.current = ref}/>}
          </div>
        </div>
      </div>
    )
  }

}

export default App;
