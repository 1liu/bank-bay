import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import money_pic from "../../img/money_pic.png";
class Landing extends Component {
  componentDidMount() {
    // If logged in, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <img
              src={money_pic}
              style={{ width: "350px" }}
              className="responsive-img credit-card"
              alt="Undraw"
            />
            <h4 className="flow-text">
              One Stop Financial Account Management System
            </h4>
            <h4 className="flow-text">
              Developped with <span style={{ fontFamily: "monospace" }}>MERN</span> stack
            </h4>
            <div className="msg-alert" role="alert">
              Attention: DEMO Only
            </div>


            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable teal lighten-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Landing.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Landing);
