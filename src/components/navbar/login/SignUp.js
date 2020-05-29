import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

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
          height: "100em",
          alignContent: "center",
          margin: "auto",
          padding: "10em",
        }}
      >
        <form
          onChange={handleChange}
          onSubmit={handleSignUp}
          style={{ flexGrow: 1, minHeight: "40em", margin: "auto" }}
        >
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <Typography
                style={{
                  color: "#33ccff",
                  textAlign: "center",
                  fontSize: "3em",
                }}
              >
                SignUp
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ marginLeft: "10%", marginRight: "10%" }}
            >
              <TextField
                style={{ margin: "auto", width: "100%", textAlign: "center" }}
                label="Username"
                name="username"
                type="text"
                value={username}
              />
            </Grid>
            <Grid
              item
              xs={12}
              style={{ marginLeft: "10%", marginRight: "10%" }}
            >
              <TextField
                style={{ margin: "auto", width: "100%", textAlign: "center" }}
                label="Password"
                name="password"
                value={password}
              />
            </Grid>
            <Grid
              item
              xs={12}
              style={{ marginLeft: "10%", marginRight: "10%" }}
            >
              <TextField
                style={{ margin: "auto", width: "100%", textAlign: "center" }}
                label="Validate Password"
                name="validatePassword"
                value={validatePassword}
              />
            </Grid>
            <Grid
              item
              xs={12}
              style={{ marginLeft: "10%", marginRight: "10%" }}
            >
              <TextField
                style={{ margin: "auto", width: "100%", textAlign: "center" }}
                label="Name"
                name="name"
                type="text"
                value={name}
              />
            </Grid>
            <Grid
              item
              xs={12}
              style={{ marginLeft: "10%", marginRight: "10%" }}
            >
              <TextField
                style={{ margin: "auto", width: "100%", textAlign: "center" }}
                label="Age"
                name="age"
                type="number"
                value={age}
              />
            </Grid>
            <Grid
              item
              xs={12}
              style={{ marginLeft: "10%", marginRight: "10%" }}
            >
              <TextField
                style={{ margin: "auto", width: "100%", textAlign: "center" }}
                label="Profile Pic"
                name="img"
                type="text"
                value={img}
              />
            </Grid>

            <Button
              style={{ margin: "auto", width: "70%", color: "#33ccff" }}
              size="large"
            >
              Submit
            </Button>
          </Grid>
        </form>
      </Container>
    </>
  );
}

export default SignUp;
