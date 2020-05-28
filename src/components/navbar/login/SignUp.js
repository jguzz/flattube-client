import React from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

function SignUp({
  handleChange,
  validatePassword,
  password,
  username,
  age,
  img,
  name,
  handleSignUp,
}) {
  return (
    <>
      <Container
        style={{
          alignContent: "center",
          width: "75%",
          height: "60em",
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
            onChange={handleChange}
            onSubmit={handleSignUp}
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
              <Form.Label> Sign Up</Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control name="username" type="text" value={username} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" value={password} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Validate Password</Form.Label>
              <Form.Control name="validatePassword" value={validatePassword} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" type="text" value={name} />
            </Form.Group>
            <Form.Group>
              <Form.Label>age</Form.Label>
              <Form.Control name="age" type="number" value={age} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Profile Pic</Form.Label>
              <Form.Control name="img" type="text" value={img} />
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

export default SignUp;
