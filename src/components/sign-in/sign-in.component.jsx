import React from "react";

import "./sign-in.styles.scss";
import SignInAndSignUpPage from "../../pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

class SigIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password.</span>

        <form>
          <input name="email" type="email" value={this.state.email} required />
          <label>Email</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            required
          />
          <label>Password</label>

          <input type="submit" value="Submit Form"></input>
        </form>
      </div>
    );
  }
}

export default SignIn;
