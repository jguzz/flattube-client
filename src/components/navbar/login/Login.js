import React from "react";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };
  handleLoginChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () =>
      console.log(this.state)
    );
  };
  render() {
    return (
      <>
        <form onChange={this.handleLoginChange} onSubmit={(e) => this.props.onSubmitClick(e, this.state)}>
          SignUp
          <label>
            username
            <input
              name="username"
              type="text"
              value={this.state.username}
            />
          </label>
          <label>
            Password
            <input name="password" value={this.state.password} />
          </label>
          <input type="submit" />
        </form>
      </>
    );
  }
}

export default Login;
