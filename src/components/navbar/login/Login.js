import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
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
            height: "100em",
            alignContent: "center",
            margin: "auto",
            padding: "10em",
          }}
        >
          <form
            style={{ flexGrow: 1, minHeight: "40em", margin: "auto" }}
            onChange={this.handleLoginChange}
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
                  Log In{" "}
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
                  value={this.state.username}
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
                  value={this.state.password}
                />
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  marginLeft: "15%",
                  marginRight: "15%",
                  textAlign: "center",
                }}
              >
                
                  <Button
                    onClick={(e) => this.props.onSubmitClick(e, this.state)}
                    style={{ margin: "auto", width: "70%", color: "#33ccff" }}
                    size="large"
                    Submit
                  >
               <Link to="/">
                    Log In
                  </Link>
                </Button>
              </Grid>
            </Grid>
            <Grid container>
              <Grid
                item
                style={{
                  textAlign: "center",
                  margin: "auto",
                  marginTop: "2em",
                }}
              >
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Container>
      </>
    );
  }
}

export default Login;
