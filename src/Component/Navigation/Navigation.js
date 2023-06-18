import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { withRouter } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";
import axios from "axios";
import { connect } from "react-redux";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  onLogout = (event) => {
    event.preventDefault();
    window.localStorage.clear();
    this.props.history.push("/");
  };
  userLogin = (event) => {
    event.preventDefault();
    this.props.history.push("/login/User");
  };
  UserRegister = (event) => {
    event.preventDefault();
    this.props.history.push("/signUp/User");
  };
  render() {
    return (
      <React.Fragment>
        <Navbar bg="dark" style={{ height: "75px" }}>
          <Navbar.Brand href="/" style={{ marginBottom: "10px" }}>
            <img
              height="40px"
              alt="csp1"
              src={process.env.PUBLIC_URL + "/images/home.png"}
            />
          </Navbar.Brand>
          <h2 id="name-header">Industry Project</h2>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              {window.localStorage.getItem("token") ? (
                <React.Fragment>
                  <NavItem>
                    <h6 className="name">
                      Hello, {window.localStorage.getItem("name")}
                    </h6>
                  </NavItem>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <NavItem>
                    <button
                      className="logout"
                      onClick={(event) => this.onLogout(event)}
                    >
                      Logout
                    </button>
                  </NavItem>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <NavItem>
                    <button
                      className="logout"
                      onClick={(event) => this.userLogin(event)}
                    >
                      User SignIn
                    </button>
                  </NavItem>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <NavItem>
                    <button
                      className="logout"
                      onClick={(event) => this.UserRegister(event)}
                    >
                      User SignUp
                    </button>
                  </NavItem>
                </React.Fragment>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default withRouter(Navigation);
