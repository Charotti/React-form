import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="text" className="form-control" />
          </div>

          <button type="submit" className="btn btn-block btn-primary">
            Submit
          </button>
        </form>
        {/* <form>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </form> */}
      </div>
    );
  }
}

export default App;
