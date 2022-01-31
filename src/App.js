import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("hello from handleSubmit");
  }
  handleEmailInput(e) {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    e.target.className = e.target.value.match(pattern)
      ? "form-control is-valid"
      : "form-control is-invalid";
  }
  handlePasswordInput(e) {
    const pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    e.target.className = e.target.value.match(pattern)
      ? "form-control is-valid"
      : "form-control is-invalid";
  }

  render() {
    return (
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col col-lg-6 ">
            <h1 className="text-center">Login</h1>
            <form onSubmit={this.handleSubmit}>
              <label for="email" className="form-label mt-2">
                Email address
              </label>
              <input
                onChange={this.handleEmailInput}
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email..."
                required
              />
              <label for="password" className="form-label mt-2">
                Password
              </label>
              <input
                onChange={this.handlePasswordInput}
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password..."
                required
              />
              <div className="mt-2 form-check">
                <input
                  type="checkBox"
                  className="form-check-input"
                  id="check"
                />
                <label className="form-check-label" for="checkBox">
                  Remember me
                </label>
              </div>
              <button type="submit" className="btn btn-primary mt-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
