import React from "react";
import "./Home.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: [],
      required: false,
      internet: false,
    };
  }

  componentDidMount() {
    document.body.style.backgroundImage = "none";
    axios
      .get("http://localhost:4000/api/meals")
      .then((response) => {
        this.setState({ meals: response.data });
      })
      .catch((err) => {
        this.setState({ internet: true });
      });
  }

  mealDetails = (meal) => {
    if (
      window.localStorage.getItem("token") &&
      window.localStorage.getItem("token").length > 10
    ) {
      this.props.history.push(`/mealDetails/${meal}`);
    } else {
      this.setState({ required: true });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1 class="display-3">Develop your home page here</h1>
          <blockquote class="blockquote text-center">
            <p class="mb-0">
              Please view my Auth System
            </p>
            <footer class="blockquote-footer">
              Authentication and <cite title="Source Title">Authorization System</cite>
            </footer>
          </blockquote>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
