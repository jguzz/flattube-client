import React from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

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
        <Container
          style={{
            alignContent: "center",
            width: "75%",
            height: "30em",
            padding: "4.5%",
          }}
        >
          <Card
            style={{
              background: "#F8F8F8",
              width: "75%",
              height: "100%",
              margin: "auto",
            }}
          >
            <Form
              onChange={this.handleLoginChange}
              onSubmit={(e) => this.props.onSubmitClick(e, this.state)}
              style={{
                alignContent: "center",
                background: "#F8F8F8",
                width: "75%",
                margin: "auto",
              }}
            >
              <Form.Group
                style={{
                  textAlign: "center",
                  fontSize: "20pt",
                  color: "#2AAED8",
                }}
              >
                <Form.Label> Login</Form.Label>
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Label>Username </Form.Label>
                <Form.Control
                  placeholder="Username"
                  name="username"
                  type="text"
                  value={this.state.username}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label> Password </Form.Label>
                <Form.Control
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="submit"
                  style={{ background: "#2AAED8", color: "white" }}
                />
              </Form.Group>
            </Form>
          </Card>
        </Container>
      </>
    );
  }
}

export default Login;
