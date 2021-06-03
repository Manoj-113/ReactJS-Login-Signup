import React from 'react';
import loginImg from './img/loginIMG.png';

export class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="base-container">
            <div className="header">Login</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg}/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <lebel htmlFor="username">Username</lebel>
                        <input type="text" name="username" placeholder="username"/>
                    </div>

                    <div className="form-group">
                        <lebel htmlFor="password">Password</lebel>
                        <input type="password" name="password" placeholder="password"/>
                    </div>


                </div>
            </div>
            <div className="foorter">
                <button type="button" className="btn">Login</button>
            </div>
        </div>
    }
}