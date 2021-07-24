import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import '../Assets/login.css';
import AuthService from "../Api/AuthService";

const FormHeader = props => (
  <h2 id="headerTitle">{props.title}</h2>
);

const Facebook = props => (
  <a href="#" id="facebookIcon"></a>
);

const Twitter = props => (
  <a href="#" id="twitterIcon"></a>
);

const Google = props => (
  <a href="#" id="googleIcon"></a>
);

const OtherMethods = props => (
  <div id="alternativeLogin">
    <label>Or sign in with:</label>
    <div id="iconGroup">
      <Facebook />
      <Twitter />
      <Google />
    </div>
  </div>
);

const LoginPage = withRouter(({ history, location }) => {

  const [state, setState] = React.useState({ username: "", password: "", loading: false, message: "" });

  const handleInputChange = (e) => {
    e.preventDefault()
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let statetemp = { ...state };
    statetemp[name] = value
    setState({ ...statetemp });
  }

  const FormButton = props => (
    <div id="button" className="row">
      <button onClick={props.onClick}>{props.title}</button>
    </div>
  );

  // const handleLogin = (e) => {
  //   console.log(state)
  // }

  const handleLogin = (e) => {
    e.preventDefault();

    setState({
      username: state.username,
      password: state.password,
      message: "",
      loading: true
    });

    AuthService.login(state.username, state.password).then(
      () => {
        history.push("/");
        window.location.reload();
      },
      error => {
        console.log(error)
        const resMessage =
          (error.response &&
            error.response.data) ||
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setState({
          username: state.username,
          password: state.password,
          loading: false,
          message: resMessage
        });

      }
    );
  }

  return (
    <div>
      <div id="loginform">
        <FormHeader title="Login" />

        <div className="row">
          <label>Username</label>
          <input
            name="username"
            onChange={(e) => handleInputChange(e)}
            value={state.username}
            placeholder="Enter your username" type="text" />
        </div>
        <div className="row">
          <label>Password</label>
          <input
            name="password"
            onChange={(e) => handleInputChange(e)}
            value={state.password}
            placeholder="Enter your password"
            type="password" />
        </div>
        <FormButton onClick={(e) => handleLogin(e)} title="Log in" />
        {
          state.message ?
            <div className="alert alert-danger" role="alert">
              {state.message}
            </div>
            :
            <div className="alert alert-danger visibility-hidden"></div>
        }
        <OtherMethods />
      </div>
    </div>
  );
});

export default LoginPage;
