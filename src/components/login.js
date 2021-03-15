import { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    password: ""
  }
  handleEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }
  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    
   }
  
  
    render() {
        return (
            
        <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-6 offset-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Sign In</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Please sign in to continue.
                  </h6>
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                            placeholder="Enter email"
                            onChange={this.handleEmail}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                            placeholder="Password"
                            onChange={this.handlePassword}
                      />
                    </div>
                    <button type="submit" className="btn btn-success">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
    }
}
export default Login;