import React, {useState} from 'react';
import classNames from 'classnames';
import Axios from 'axios';

import AuthService from '../Services/auth-service';

import Header from '../Components/Header.js';
import InputText from '../Components/InputText.js';
import Button from '../Components/Button.js';

export default class Authentication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "login",
            login: "",
            password: "",
            onLogin: props.onLogin,
        };
    }

    onChangeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    };

    onSubmitLogin = (e) => {
        this.state.onLogin(e, this.state.login, this.state.password);
    };



    render( ){
        return(
            <div className="AllContainer">
                <Header />
                <form onSubmit={this.onSubmitLogin} style={{paddingTop: "96px", height: "100%"}}>
                    <div className="form-outline mb-4" >
                        <label className='h3' htmlFor="loginName" style={{paddingRight: "8px"}}>Username</label>
                        <input type="login" id="loginName" name="login" className="form-control" onChange={this.onChangeHandler}/>
                    </div>

                    <div className="form-outline mb-4" >
                        <label className='h3' htmlFor="loginPassword" style={{paddingRight: "8px"}}>Password</label>
                        <input type="password" id="loginPassword" name="password" className="form-control" onChange={this.onChangeHandler}/>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mb-e">Entrar</button>
                </form>
            </div>
        ); 
    }
}